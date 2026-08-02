import type {ArrayPropertyType} from "./ArrayPropertyType";
import type {MapPropertyType} from "./MapPropertyType";
import type {PropertyType} from "./PropertyType";
import type {AnyPropertyType} from "./AnyPropertyType";
import type {BooleanPropertyType} from "./BooleanPropertyType";
import type {GenericPropertyType} from "./GenericPropertyType";
import type {IntegerPropertyType} from "./IntegerPropertyType";
import type {NumberPropertyType} from "./NumberPropertyType";
import type {ReferencePropertyType} from "./ReferencePropertyType";
import type {StringPropertyType} from "./StringPropertyType";

/**
 * The abstract base type for properties that define inline collections (maps or arrays).
 */
export interface CollectionPropertyType extends PropertyType {
    schema?: AnyPropertyType|ArrayPropertyType|BooleanPropertyType|GenericPropertyType|IntegerPropertyType|MapPropertyType|NumberPropertyType|ReferencePropertyType|StringPropertyType
}

