import type {PropertyType} from "./PropertyType";

/**
 * A wildcard property that accepts any valid JSON value (object, array, string, etc.).
 */
export interface AnyPropertyType extends PropertyType {
    type: "any"
}

