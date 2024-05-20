import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, props } from './DivColor.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ARow', typeof __VLS_localComponents, "ARow", "aRow", "a-row"> &
__VLS_WithComponent<'ACol', typeof __VLS_localComponents, "ACol", "aCol", "a-col">;
__VLS_components.ARow; __VLS_components.ARow; __VLS_components.aRow; __VLS_components.aRow; __VLS_components["a-row"]; __VLS_components["a-row"];
// @ts-ignore
[ARow, ARow,];
__VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.ACol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components.aCol; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"]; __VLS_components["a-col"];
// @ts-ignore
[ACol, ACol, ACol, ACol,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
{
const __VLS_0 = ({} as 'ARow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.ARow; } : 'aRow' extends keyof typeof __VLS_ctx ? { 'ARow': typeof __VLS_ctx.aRow; } : 'a-row' extends keyof typeof __VLS_ctx ? { 'ARow': (typeof __VLS_ctx)["a-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ARow;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, gutter: (({ xs: 8, sm: 16, md: 24, lg: 32 })), justify: ("space-between"), align: ("bottom"), }));
({} as { ARow: typeof __VLS_0; }).ARow;
({} as { ARow: typeof __VLS_0; }).ARow;
const __VLS_2 = __VLS_1({ ...{}, gutter: (({ xs: 8, sm: 16, md: 24, lg: 32 })), justify: ("space-between"), align: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, gutter: (({ xs: 8, sm: 16, md: 24, lg: 32 })), justify: ("space-between"), align: ("bottom"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, span: ((1)), }));
({} as { ACol: typeof __VLS_5; }).ACol;
({} as { ACol: typeof __VLS_5; }).ACol;
const __VLS_7 = __VLS_6({ ...{}, span: ((1)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, span: ((1)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
({ backgroundColor: props.color });
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as 'ACol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.ACol; } : 'aCol' extends keyof typeof __VLS_ctx ? { 'ACol': typeof __VLS_ctx.aCol; } : 'a-col' extends keyof typeof __VLS_ctx ? { 'ACol': (typeof __VLS_ctx)["a-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ACol;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, span: ((23)), }));
({} as { ACol: typeof __VLS_15; }).ACol;
({} as { ACol: typeof __VLS_15; }).ACol;
const __VLS_17 = __VLS_16({ ...{}, span: ((23)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, span: ((23)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(props.text);
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
