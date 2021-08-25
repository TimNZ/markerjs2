export type ZoomEvent = {
	type: string,
	zoomLevel: number
}

export type ZoomEventHandler = (event: ZoomEvent) => void;