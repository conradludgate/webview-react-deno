export { default } from "https://dev.jspm.io/react@17.0.1";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [key: string]: any;
        }
    }
}
