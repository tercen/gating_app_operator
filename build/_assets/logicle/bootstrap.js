import init, { LogicleW } from "./pkg/logicle_wasm.js";

function _initLogicle() {
    return init();
}
function logicleW(T,W,M,A,bins) {
    return LogicleW.new(T, W, M, A, bins);
}
function logicle_validate_parametersW(T,W,M,A,bins) {
    LogicleW.validate_parameters(T, W, M, A, bins);
}
window._initLogicle = _initLogicle;
window.logicleW = logicleW;
window.logicle_validate_parametersW = logicle_validate_parametersW;