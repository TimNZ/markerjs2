import { MarkerArea } from '..';
import { IZoomSettings } from '../core/IZoomSettings';
import { ZoomEventHandler } from '../core/ZoomEvent';
export class ZoomControl {
  private settings: IZoomSettings;
  private markerArea: MarkerArea;
  private visible: boolean;
	private zoomLevel: number;
	private disposed: boolean
  private zoomEventListeners: Map<
    ZoomEventHandler,
    ZoomEventHandler
  > = new Map();
  constructor(markerArea: MarkerArea, settings: IZoomSettings) {
    this.settings = settings;
    this.markerArea = markerArea;
    this.visible = false;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setZoomLevel = this.hide.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
		this.zoomLevel = settings.initial;
    if (this.settings.enabled) this.show();
  }

  public show(): void {
		this.visible = true;
	}

  public hide(): void {
		this.visible = false;
	}

	public dispose(): void {
		this.disposed = true
	}

  public setZoomLevel(level: number): void {
		this.zoomLevel = level;
	}

  public addEventListener(listener: ZoomEventHandler): void {
    this.zoomEventListeners.set(listener, listener);
  }

  public removeEventListener(listener: ZoomEventHandler): void {
    this.zoomEventListeners.delete(listener);
  }
}
