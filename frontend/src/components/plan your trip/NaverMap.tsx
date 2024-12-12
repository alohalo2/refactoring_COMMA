import React, { useEffect, useState } from "react";

const NaverMap = () => {
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [map, setMap] = useState<naver.maps.Map | null>(null); // 네이버 지도 객체 상태
    const [markers, setMarkers] = useState<naver.maps.Marker[]>([]); // 생성된 마커 상태

    useEffect(() => {
        // 스크립트 동적 로드
        const script = document.createElement("script");
        script.src =
            `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NCLOUD_CLIENT_ID}`;
        script.async = true;

        script.onload = () => {
            // naver 객체가 로드된 후 네이버 지도 초기화
            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.5665, 126.9780), // 서울 좌표
                zoom: 10,
            });

            console.log("지도 객체 생성 완료:", map);
            setMap(map);

            // 마커 추가
            new naver.maps.Marker({
                position: new naver.maps.LatLng(37.5665, 126.9780),
                map: map,
                title: "서울", // 마커에 마우스를 올렸을 때 나타나는 텍스트
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
            console.log("searchLocation 함수 실행됨")
            if (!searchQuery || !map) return;
            console.log("검색어 또는 지도 객체가 없습니다.");

            try {
            const response = await fetch(
                `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(
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

            if (data.items) {
                // 기존 마커 제거
                markers.forEach((marker) => marker.setMap(null));

                // 새 마커 생성
                const newMarkers = data.items.map((item: any) => {
                const marker = new naver.maps.Marker({
                    position: new naver.maps.LatLng(item.mapy, item.mapx),
                    map: map,
                    title: item.title.replace(/<[^>]*>?/gm, ""), // HTML 태그 제거
                });

                // 정보창 추가
                const infoWindow = new naver.maps.InfoWindow({
                    content: `<div style="padding:10px;">${item.title}</div>`,
                });

                naver.maps.Event.addListener(marker, "click", () => {
                    infoWindow.open(map, marker);
                });

                return marker;
                });

                setMarkers(newMarkers); // 마커 상태 업데이트

                // 첫 번째 검색 결과로 지도 이동
                if (newMarkers.length > 0) {
                map.setCenter(new naver.maps.LatLng(data.items[0].mapy, data.items[0].mapx));
                map.setZoom(13); // 확대
                }
            }
            } catch (error) {
            console.error("검색 중 오류 발생:", error);
            }
        };


    return (
        <div>
            <div
                id="map"
                style={{ width: "100%", height: "400px" }} // 지도 크기 설정
            ></div>
            <input
            type="text"
            placeholder="지역 검색"
            value={searchQuery}
            onChange={(e) => {
                console.log("검색어 입력:", e.target.value);
                setSearchQuery(e.target.value);
            }}
            />
            <button onClick={() => searchLocation()}>검색</button>
        </div>
    );
};

export default NaverMap;