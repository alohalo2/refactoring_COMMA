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
    }

    class LatLng {
        constructor(lat: number, lng: number);
    }

    class Marker {
        constructor(options: { position: LatLng; map: Map; title?: string });
        setMap(map: Map | null): void;
    }

    class InfoWindow {
        constructor(options: { content: string });
        open(map: Map, marker: Marker): void;
    }

    namespace Event {
        function addListener(
        instance: any,
        eventName: string,
        callback: () => void
        ): void;
    }
    }
}