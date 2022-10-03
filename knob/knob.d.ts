import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare const KNOB_VALUE_ACCESSOR: any;
export declare class Knob {
    private cd;
    private el;
    styleClass: string;
    style: any;
    severity: string;
    valueColor: string;
    rangeColor: string;
    textColor: string;
    valueTemplate: string;
    name: string;
    size: number;
    step: number;
    min: number;
    max: number;
    strokeWidth: number;
    disabled: boolean;
    showValue: boolean;
    readonly: boolean;
    onChange: EventEmitter<any>;
    radius: number;
    midX: number;
    midY: number;
    minRadians: number;
    maxRadians: number;
    value: number;
    windowMouseMoveListener: any;
    windowMouseUpListener: any;
    windowTouchMoveListener: any;
    windowTouchEndListener: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef, el: ElementRef);
    mapRange(x: any, inMin: any, inMax: any, outMin: any, outMax: any): any;
    onClick(event: any): void;
    updateValue(offsetX: any, offsetY: any): void;
    updateModel(angle: any, start: any): void;
    onMouseDown(event: any): void;
    onMouseUp(event: any): void;
    onTouchStart(event: any): void;
    onTouchEnd(event: any): void;
    onMouseMove(event: any): void;
    onTouchMove(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    containerClass(): {
        'p-knob p-component': boolean;
        'p-disabled': boolean;
    };
    rangePath(): string;
    valuePath(): string;
    zeroRadians(): any;
    valueRadians(): any;
    minX(): number;
    minY(): number;
    maxX(): number;
    maxY(): number;
    zeroX(): number;
    zeroY(): number;
    valueX(): number;
    valueY(): number;
    largeArc(): 1 | 0;
    sweep(): 1 | 0;
    valueToDisplay(): string;
    get _value(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<Knob, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Knob, "p-knob", never, { "styleClass": "styleClass"; "style": "style"; "severity": "severity"; "valueColor": "valueColor"; "rangeColor": "rangeColor"; "textColor": "textColor"; "valueTemplate": "valueTemplate"; "name": "name"; "size": "size"; "step": "step"; "min": "min"; "max": "max"; "strokeWidth": "strokeWidth"; "disabled": "disabled"; "showValue": "showValue"; "readonly": "readonly"; }, { "onChange": "onChange"; }, never, never, false>;
}
export declare class KnobModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<KnobModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<KnobModule, [typeof Knob], [typeof i1.CommonModule], [typeof Knob]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<KnobModule>;
}
