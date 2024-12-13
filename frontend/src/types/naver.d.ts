// src/types/naver.d.ts
declare namespace naver {
    namespace maps {
    class Map {
        constructor(element: HTMLElement | string, options: {
        center: LatLng;
        zoom: number;
        });
        setCenter(latlng: LatLng): void;
        setZoom(zoom: number): void;

        // 이벤트 리스너 메서드 추가
        addListener(eventName: string, callback: (e: PointerEvent) => void): void;
    }

    class LatLng {
        constructor(lat: number, lng: number);
    }

    class Marker {
        constructor(options: { position: LatLng; map: Map; title?: string });
        setMap(map: Map | null): void;
    }

    class Point {
        constructor(x: number, y: number);
    }

    class InfoWindow {
        constructor(options: { 
            content: string;
            disableAutoPan?: boolean;
            backgroundColor?: string;
            borderWidth?: number;
            disableAnchor?: boolean;
            pixelOffset?: Point;
        });
        open(map: Map, marker: Marker): void;
        close(): void; // `close` 메서드 추가

        // setContent 메서드 추가
        setContent(content: string): void;

        // 새로 추가된 메서드
        getMap(): Map | null; // 현재 열려 있는지 확인하는 메서드
    }

    // 이벤트 객체 인터페이스 정의
    interface PointerEvent {
        coord: LatLng;      // 클릭 좌표
        overlay?: Marker;   // 클릭된 마커 또는 객체
    }

    namespace Event {
        function addListener(instance: any, eventName: string, callback: (e: PointerEvent) => void): void;
    }
    }
}