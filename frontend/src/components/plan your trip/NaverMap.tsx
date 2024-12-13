import React, { useEffect, useState } from "react";
import {
    NM_Search_Box,
    NM_Search_Input_Box,
    NM_Search_Input,
    NM_Search_Button,  

} from '../../css/plan your trip/NaverMap.css';

const NaverMap = () => {
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [map, setMap] = useState<naver.maps.Map | null>(null); // 네이버 지도 객체 상태
    const [markers, setMarkers] = useState<naver.maps.Marker[]>([]); // 생성된 마커 상태
    const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(null); // 현재 열린 정보창 상태

    useEffect(() => {

        // 스크립트 동적 로드
        const script = document.createElement("script");
        script.src =
            `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NCLOUD_CLIENT_ID}`;
        script.async = true;

        script.onload = () => {
            // naver 객체가 로드된 후 네이버 지도 초기화
            const mapInstance = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.5665, 126.9780), // 서울 좌표
                zoom: 13,
            });

            console.log("지도 객체 생성 완료:", mapInstance);
            setMap(mapInstance);

            // 지도 클릭 시 정보 창 닫기
            naver.maps.Event.addListener(mapInstance, "mouseout", () => {
                console.log("지도 이동으로 정보 창 닫기");
                if (infoWindow != null) {
                    infoWindow.close();
                    setInfoWindow(null);
                    console.log("infoWindow : " + infoWindow);
                }
                
            });

            // 서울 초기 데이터
            const seoulData = {
                title: "서울특별시청",
                address: "서울특별시 중구 세종대로 110 서울특별시청",
                category: "특별,광역시청청",
                mapx: 126.9780 * 1e7, // 변환 전 경도값
                mapy: 37.5665 * 1e7, // 변환 전 위도값
            };

            // 서울 마커 생성
            const seoulLatLng = new naver.maps.LatLng(
                Number(seoulData.mapy) / 1e7,
                Number(seoulData.mapx) / 1e7
            );

            const seoulMarker = new naver.maps.Marker({
                position: seoulLatLng,
                map: mapInstance,
                title: seoulData.title, // 마커 툴팁
            });

            // 서울 마커에 정보창 추가
            const seoulInfoWindow = new naver.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; 
                                background: white; 
                                border: none; 
                                border-radius: 5px; 
                                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                ">
                                <div style= "display: flex;
                                            align-items: flex-end;
                                            gap: 10px;
                                            ">
                                    <h4 style= "color: #0068C3;
                                                font-weight: bold;
                                                font-size: 18px;
                                                margin: 10px 0;
                                    ">
                                    ${seoulData.title}</h4>
                                    <p style=   "margin: 10px 0;
                                                font-size: 14px;
                                                color: #777;
                                                ">${seoulData.category}</p>
                                </div>
                        <p>${seoulData.address}</p>
                    </div>`,
                disableAutoPan: false,
                backgroundColor: "transparent",
                borderWidth: 0,
                disableAnchor: true,
                pixelOffset: new naver.maps.Point(0, -20),
            });

            // 마커 클릭 시 정보창 열기
            naver.maps.Event.addListener(seoulMarker, "mouseover", () => {

                // 이전 정보창 닫기
                if (infoWindow) {
                    infoWindow.close();
                }

                // 새로운 정보창 열기
                seoulInfoWindow.open(mapInstance, seoulMarker);
                setInfoWindow(seoulInfoWindow);
            });

        };

        document.head.appendChild(script);

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            document.head.removeChild(script);
        };
    }, []);

        // 지역 검색 함수
        const searchLocation = async () => {

            // 지도 객체 및 검색어 확인
            if (!searchQuery || !map) return;

            try {
            const response = await fetch(
                `/v1/search/local.json?query=${encodeURIComponent(
                searchQuery
                )}&display=5&start=1&sort=random`,
                {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": process.env.REACT_APP_NDEVELOPERS_CLIENT_ID || "",
                    "X-Naver-Client-Secret": process.env.REACT_APP_NDEVELOPERS_CLIENT_SECRET || "",
                },
                }
            );

            const data = await response.json();

            console.log(data);
            
            if (data.items) {
                // 기존 마커 제거
                markers.forEach((marker) => marker.setMap(null));

                // 새 마커 생성
                const newMarkers = data.items.map((item: any) => {
                    const lat = Number(item.mapy) / 1e7; // 위도 변환
                    const lng = Number(item.mapx) / 1e7; // 경도 변환
        
                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(lat, lng),
                        map,
                        title: item.title.replace(/<[^>]*>?/gm, ""), // HTML 태그 제거
                    });

                // 정보창 추가
                const infoWindow = new naver.maps.InfoWindow({
                    content: `
                        <div style="padding: 10px; 
                                background: white; 
                                border: none; 
                                border-radius: 5px; 
                                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                                ">
                                <div style= "display: flex;
                                            align-items: flex-end;
                                            gap: 10px;
                                    ">
                                    <h4 style= "color: #0068C3;
                                                font-weight: bold;
                                                font-size: 18px;
                                                margin: 10px 0;
                                                ">
                                    ${item.title.replace(/<[^>]*>?/gm, "")}
                                    </h4>
                                    <p style=   "margin: 10px 0;
                                                font-size: 14px;
                                                color: #777;
                                    ">
                                    ${item.category.replace(/^.*>/, "")}
                                    </p>
                                </div>
                                <p>${item.address}</p>
                        </div>`,
                    disableAutoPan: false, // 정보창 클릭 시 자동으로 지도 이동 방지
                    backgroundColor: "transparent", // 기본 배경 제거
                    borderWidth: 0, // 기본 테두리 제거
                    disableAnchor: true, // 앵커 표시 제거
                    pixelOffset: new naver.maps.Point(0, -20), // 마커와의 거리 조정
                });

                // 검색 결과 마커 클릭 시
                naver.maps.Event.addListener(marker, "mouseover", () => {
                    console.log("검색 결과 마커 클릭");

                    // // 기존 열려 있는 정보창 닫기
                    // if (infoWindow) {
                    //     infoWindow.close();
                    // }

                    // 새 정보창 열기
                    infoWindow.open(map, marker);
                    setInfoWindow(infoWindow); // 상태 업데이트
                });

                return marker;
                });

                setMarkers(newMarkers); // 마커 상태 업데이트

                // 첫 번째 검색 결과로 지도 이동
                const firstLocation = data.items[0];
                const centerLat = Number(firstLocation.mapy) / 1e7;
                const centerLng = Number(firstLocation.mapx) / 1e7;

                map.setCenter(new naver.maps.LatLng(centerLat, centerLng));
                map.setZoom(15); // 확대
            }
            } catch (error) {
            console.error("검색 중 오류 발생:", error);
            }
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                searchLocation();
            }
        };

    return (
        <div>
            <div
                id="map"
                style={{ width: "100%", height: "400px" }} // 지도 크기 설정
            ></div>
            <div className={NM_Search_Box}>
                <h3>지역 위치 검색</h3>
                <div className={NM_Search_Input_Box}>
                    <input
                    type="text"
                    placeholder="지역을 검색하세요."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    onKeyDown={handleKeyDown} // Enter 키 이벤트 처리
                    className={NM_Search_Input}
                    />
                    <button onClick={searchLocation}
                            className={NM_Search_Button}
                    >
                        <img src="/images/search_icon.svg"></img>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NaverMap;