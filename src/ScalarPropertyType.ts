import type {BooleanPropertyType} from "./BooleanPropertyType";
import type {IntegerPropertyType} from "./IntegerPropertyType";
import type {NumberPropertyType} from "./NumberPropertyType";
import type {StringPropertyType} from "./StringPropertyType";
import type {PropertyType} from "./PropertyType";

/**
 * The abstract base type for simple scalar value properties (strings, integers, numbers, booleans).
 */
export interface ScalarPropertyType extends PropertyType {
}

