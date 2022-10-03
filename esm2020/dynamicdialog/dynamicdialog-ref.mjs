import { Subject } from 'rxjs';
export class DynamicDialogRef {
    constructor() {
        this._onClose = new Subject();
        this.onClose = this._onClose.asObservable();
        this._onDestroy = new Subject();
        this.onDestroy = this._onDestroy.asObservable();
        this._onDragStart = new Subject();
        this.onDragStart = this._onDragStart.asObservable();
        this._onDragEnd = new Subject();
        this.onDragEnd = this._onDragEnd.asObservable();
        this._onResizeInit = new Subject();
        this.onResizeInit = this._onResizeInit.asObservable();
        this._onResizeEnd = new Subject();
        this.onResizeEnd = this._onResizeEnd.asObservable();
        this._onMaximize = new Subject();
        this.onMaximize = this._onMaximize.asObservable();
    }
    close(result) {
        this._onClose.next(result);
    }
    destroy() {
        this._onDestroy.next(null);
    }
    dragStart(event) {
        this._onDragStart.next(event);
    }
    dragEnd(event) {
        this._onDragEnd.next(event);
    }
    resizeInit(event) {
        this._onResizeInit.next(event);
    }
    resizeEnd(event) {
        this._onResizeEnd.next(event);
    }
    maximize(value) {
        this._onMaximize.next(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZy1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pY2RpYWxvZy9keW5hbWljZGlhbG9nLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDNUI7UUE4QmlCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzVDLFlBQU8sR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2QyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNwRCxjQUFTLEdBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFeEMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ25ELGdCQUFXLEdBQW9CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0MsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakQsY0FBUyxHQUFvQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNwRCxpQkFBWSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNuRCxnQkFBVyxHQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9DLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNsRCxlQUFVLEdBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFqRGpELENBQUM7SUFFakIsS0FBSyxDQUFDLE1BQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUUsU0FBUyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFpQjtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FzQkoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0RpYWxvZ1JlZiB7XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0Y2xvc2UocmVzdWx0PzogYW55KSB7XHJcblx0XHR0aGlzLl9vbkNsb3NlLm5leHQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cdFx0dGhpcy5fb25EZXN0cm95Lm5leHQobnVsbCk7XHJcblx0fVxyXG5cclxuICAgIGRyYWdTdGFydChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0Lm5leHQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdFbmQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9vbkRyYWdFbmQubmV4dChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSW5pdChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX29uUmVzaXplSW5pdC5uZXh0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVFbmQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9vblJlc2l6ZUVuZC5uZXh0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXhpbWl6ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb25NYXhpbWl6ZS5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSBfb25DbG9zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIG9uQ2xvc2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cdG9uRGVzdHJveTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb25EZXN0cm95LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uRHJhZ1N0YXJ0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgb25EcmFnU3RhcnQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uRHJhZ1N0YXJ0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uRHJhZ0VuZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIG9uRHJhZ0VuZDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb25EcmFnRW5kLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uUmVzaXplSW5pdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIG9uUmVzaXplSW5pdDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb25SZXNpemVJbml0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uUmVzaXplRW5kID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgb25SZXNpemVFbmQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uUmVzaXplRW5kLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uTWF4aW1pemUgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBvbk1heGltaXplOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9vbk1heGltaXplLmFzT2JzZXJ2YWJsZSgpO1xyXG59XHJcbiJdfQ==