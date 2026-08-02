import type {CollectionPropertyType} from "./CollectionPropertyType";

/**
 * Represents a property containing a list of items that share the same schema.
 */
export interface ArrayPropertyType extends CollectionPropertyType {
    type: "array"
}

