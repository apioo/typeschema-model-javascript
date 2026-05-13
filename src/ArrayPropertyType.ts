import type {CollectionPropertyType} from "./CollectionPropertyType";

/**
 * A property containing a list of items of a consistent type.
 */
export interface ArrayPropertyType extends CollectionPropertyType {
    type: "array"
}

