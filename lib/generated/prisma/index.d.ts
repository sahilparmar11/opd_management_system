
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model diagnosis_types
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type diagnosis_types = $Result.DefaultSelection<Prisma.$diagnosis_typesPayload>
/**
 * Model doctors
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type doctors = $Result.DefaultSelection<Prisma.$doctorsPayload>
/**
 * Model hospitals
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type hospitals = $Result.DefaultSelection<Prisma.$hospitalsPayload>
/**
 * Model opd
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type opd = $Result.DefaultSelection<Prisma.$opdPayload>
/**
 * Model opd_diagnosis_types
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type opd_diagnosis_types = $Result.DefaultSelection<Prisma.$opd_diagnosis_typesPayload>
/**
 * Model patients
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type patients = $Result.DefaultSelection<Prisma.$patientsPayload>
/**
 * Model receipt_tran
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type receipt_tran = $Result.DefaultSelection<Prisma.$receipt_tranPayload>
/**
 * Model receipts
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type receipts = $Result.DefaultSelection<Prisma.$receiptsPayload>
/**
 * Model sub_treatment_types
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type sub_treatment_types = $Result.DefaultSelection<Prisma.$sub_treatment_typesPayload>
/**
 * Model treatment_types
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type treatment_types = $Result.DefaultSelection<Prisma.$treatment_typesPayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Diagnosis_types
 * const diagnosis_types = await prisma.diagnosis_types.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Diagnosis_types
   * const diagnosis_types = await prisma.diagnosis_types.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.diagnosis_types`: Exposes CRUD operations for the **diagnosis_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosis_types
    * const diagnosis_types = await prisma.diagnosis_types.findMany()
    * ```
    */
  get diagnosis_types(): Prisma.diagnosis_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctors`: Exposes CRUD operations for the **doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.doctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitals`: Exposes CRUD operations for the **hospitals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospitals.findMany()
    * ```
    */
  get hospitals(): Prisma.hospitalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opd`: Exposes CRUD operations for the **opd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opds
    * const opds = await prisma.opd.findMany()
    * ```
    */
  get opd(): Prisma.opdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opd_diagnosis_types`: Exposes CRUD operations for the **opd_diagnosis_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opd_diagnosis_types
    * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findMany()
    * ```
    */
  get opd_diagnosis_types(): Prisma.opd_diagnosis_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.patientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipt_tran`: Exposes CRUD operations for the **receipt_tran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipt_trans
    * const receipt_trans = await prisma.receipt_tran.findMany()
    * ```
    */
  get receipt_tran(): Prisma.receipt_tranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipts`: Exposes CRUD operations for the **receipts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipts.findMany()
    * ```
    */
  get receipts(): Prisma.receiptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_treatment_types`: Exposes CRUD operations for the **sub_treatment_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_treatment_types
    * const sub_treatment_types = await prisma.sub_treatment_types.findMany()
    * ```
    */
  get sub_treatment_types(): Prisma.sub_treatment_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatment_types`: Exposes CRUD operations for the **treatment_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treatment_types
    * const treatment_types = await prisma.treatment_types.findMany()
    * ```
    */
  get treatment_types(): Prisma.treatment_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    diagnosis_types: 'diagnosis_types',
    doctors: 'doctors',
    hospitals: 'hospitals',
    opd: 'opd',
    opd_diagnosis_types: 'opd_diagnosis_types',
    patients: 'patients',
    receipt_tran: 'receipt_tran',
    receipts: 'receipts',
    sub_treatment_types: 'sub_treatment_types',
    treatment_types: 'treatment_types',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "diagnosis_types" | "doctors" | "hospitals" | "opd" | "opd_diagnosis_types" | "patients" | "receipt_tran" | "receipts" | "sub_treatment_types" | "treatment_types" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      diagnosis_types: {
        payload: Prisma.$diagnosis_typesPayload<ExtArgs>
        fields: Prisma.diagnosis_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosis_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosis_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          findFirst: {
            args: Prisma.diagnosis_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosis_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          findMany: {
            args: Prisma.diagnosis_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>[]
          }
          create: {
            args: Prisma.diagnosis_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          createMany: {
            args: Prisma.diagnosis_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diagnosis_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>[]
          }
          delete: {
            args: Prisma.diagnosis_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          update: {
            args: Prisma.diagnosis_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          deleteMany: {
            args: Prisma.diagnosis_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosis_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diagnosis_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>[]
          }
          upsert: {
            args: Prisma.diagnosis_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosis_typesPayload>
          }
          aggregate: {
            args: Prisma.Diagnosis_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosis_types>
          }
          groupBy: {
            args: Prisma.diagnosis_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Diagnosis_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosis_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Diagnosis_typesCountAggregateOutputType> | number
          }
        }
      }
      doctors: {
        payload: Prisma.$doctorsPayload<ExtArgs>
        fields: Prisma.doctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findFirst: {
            args: Prisma.doctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findMany: {
            args: Prisma.doctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          create: {
            args: Prisma.doctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          createMany: {
            args: Prisma.doctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          delete: {
            args: Prisma.doctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          update: {
            args: Prisma.doctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          deleteMany: {
            args: Prisma.doctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          upsert: {
            args: Prisma.doctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.doctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      hospitals: {
        payload: Prisma.$hospitalsPayload<ExtArgs>
        fields: Prisma.hospitalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hospitalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hospitalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          findFirst: {
            args: Prisma.hospitalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hospitalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          findMany: {
            args: Prisma.hospitalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          create: {
            args: Prisma.hospitalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          createMany: {
            args: Prisma.hospitalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hospitalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          delete: {
            args: Prisma.hospitalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          update: {
            args: Prisma.hospitalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          deleteMany: {
            args: Prisma.hospitalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hospitalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hospitalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          upsert: {
            args: Prisma.hospitalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          aggregate: {
            args: Prisma.HospitalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitals>
          }
          groupBy: {
            args: Prisma.hospitalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hospitalsCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalsCountAggregateOutputType> | number
          }
        }
      }
      opd: {
        payload: Prisma.$opdPayload<ExtArgs>
        fields: Prisma.opdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.opdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.opdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          findFirst: {
            args: Prisma.opdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.opdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          findMany: {
            args: Prisma.opdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>[]
          }
          create: {
            args: Prisma.opdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          createMany: {
            args: Prisma.opdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.opdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>[]
          }
          delete: {
            args: Prisma.opdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          update: {
            args: Prisma.opdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          deleteMany: {
            args: Prisma.opdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.opdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.opdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>[]
          }
          upsert: {
            args: Prisma.opdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opdPayload>
          }
          aggregate: {
            args: Prisma.OpdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpd>
          }
          groupBy: {
            args: Prisma.opdGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpdGroupByOutputType>[]
          }
          count: {
            args: Prisma.opdCountArgs<ExtArgs>
            result: $Utils.Optional<OpdCountAggregateOutputType> | number
          }
        }
      }
      opd_diagnosis_types: {
        payload: Prisma.$opd_diagnosis_typesPayload<ExtArgs>
        fields: Prisma.opd_diagnosis_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.opd_diagnosis_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.opd_diagnosis_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          findFirst: {
            args: Prisma.opd_diagnosis_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.opd_diagnosis_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          findMany: {
            args: Prisma.opd_diagnosis_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>[]
          }
          create: {
            args: Prisma.opd_diagnosis_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          createMany: {
            args: Prisma.opd_diagnosis_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.opd_diagnosis_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>[]
          }
          delete: {
            args: Prisma.opd_diagnosis_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          update: {
            args: Prisma.opd_diagnosis_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          deleteMany: {
            args: Prisma.opd_diagnosis_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.opd_diagnosis_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.opd_diagnosis_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>[]
          }
          upsert: {
            args: Prisma.opd_diagnosis_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opd_diagnosis_typesPayload>
          }
          aggregate: {
            args: Prisma.Opd_diagnosis_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpd_diagnosis_types>
          }
          groupBy: {
            args: Prisma.opd_diagnosis_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Opd_diagnosis_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.opd_diagnosis_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Opd_diagnosis_typesCountAggregateOutputType> | number
          }
        }
      }
      patients: {
        payload: Prisma.$patientsPayload<ExtArgs>
        fields: Prisma.patientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findFirst: {
            args: Prisma.patientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findMany: {
            args: Prisma.patientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          create: {
            args: Prisma.patientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          createMany: {
            args: Prisma.patientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          delete: {
            args: Prisma.patientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          update: {
            args: Prisma.patientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          deleteMany: {
            args: Prisma.patientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          upsert: {
            args: Prisma.patientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.patientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      receipt_tran: {
        payload: Prisma.$receipt_tranPayload<ExtArgs>
        fields: Prisma.receipt_tranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receipt_tranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receipt_tranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          findFirst: {
            args: Prisma.receipt_tranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receipt_tranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          findMany: {
            args: Prisma.receipt_tranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>[]
          }
          create: {
            args: Prisma.receipt_tranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          createMany: {
            args: Prisma.receipt_tranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.receipt_tranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>[]
          }
          delete: {
            args: Prisma.receipt_tranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          update: {
            args: Prisma.receipt_tranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          deleteMany: {
            args: Prisma.receipt_tranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receipt_tranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.receipt_tranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>[]
          }
          upsert: {
            args: Prisma.receipt_tranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receipt_tranPayload>
          }
          aggregate: {
            args: Prisma.Receipt_tranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt_tran>
          }
          groupBy: {
            args: Prisma.receipt_tranGroupByArgs<ExtArgs>
            result: $Utils.Optional<Receipt_tranGroupByOutputType>[]
          }
          count: {
            args: Prisma.receipt_tranCountArgs<ExtArgs>
            result: $Utils.Optional<Receipt_tranCountAggregateOutputType> | number
          }
        }
      }
      receipts: {
        payload: Prisma.$receiptsPayload<ExtArgs>
        fields: Prisma.receiptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          findFirst: {
            args: Prisma.receiptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          findMany: {
            args: Prisma.receiptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>[]
          }
          create: {
            args: Prisma.receiptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          createMany: {
            args: Prisma.receiptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.receiptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>[]
          }
          delete: {
            args: Prisma.receiptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          update: {
            args: Prisma.receiptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          deleteMany: {
            args: Prisma.receiptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.receiptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>[]
          }
          upsert: {
            args: Prisma.receiptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptsPayload>
          }
          aggregate: {
            args: Prisma.ReceiptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipts>
          }
          groupBy: {
            args: Prisma.receiptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptsCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptsCountAggregateOutputType> | number
          }
        }
      }
      sub_treatment_types: {
        payload: Prisma.$sub_treatment_typesPayload<ExtArgs>
        fields: Prisma.sub_treatment_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_treatment_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_treatment_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          findFirst: {
            args: Prisma.sub_treatment_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_treatment_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          findMany: {
            args: Prisma.sub_treatment_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>[]
          }
          create: {
            args: Prisma.sub_treatment_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          createMany: {
            args: Prisma.sub_treatment_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sub_treatment_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>[]
          }
          delete: {
            args: Prisma.sub_treatment_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          update: {
            args: Prisma.sub_treatment_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          deleteMany: {
            args: Prisma.sub_treatment_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_treatment_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sub_treatment_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>[]
          }
          upsert: {
            args: Prisma.sub_treatment_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_treatment_typesPayload>
          }
          aggregate: {
            args: Prisma.Sub_treatment_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_treatment_types>
          }
          groupBy: {
            args: Prisma.sub_treatment_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_treatment_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_treatment_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_treatment_typesCountAggregateOutputType> | number
          }
        }
      }
      treatment_types: {
        payload: Prisma.$treatment_typesPayload<ExtArgs>
        fields: Prisma.treatment_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.treatment_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.treatment_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          findFirst: {
            args: Prisma.treatment_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.treatment_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          findMany: {
            args: Prisma.treatment_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>[]
          }
          create: {
            args: Prisma.treatment_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          createMany: {
            args: Prisma.treatment_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.treatment_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>[]
          }
          delete: {
            args: Prisma.treatment_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          update: {
            args: Prisma.treatment_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          deleteMany: {
            args: Prisma.treatment_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.treatment_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.treatment_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>[]
          }
          upsert: {
            args: Prisma.treatment_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$treatment_typesPayload>
          }
          aggregate: {
            args: Prisma.Treatment_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatment_types>
          }
          groupBy: {
            args: Prisma.treatment_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Treatment_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.treatment_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Treatment_typesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    diagnosis_types?: diagnosis_typesOmit
    doctors?: doctorsOmit
    hospitals?: hospitalsOmit
    opd?: opdOmit
    opd_diagnosis_types?: opd_diagnosis_typesOmit
    patients?: patientsOmit
    receipt_tran?: receipt_tranOmit
    receipts?: receiptsOmit
    sub_treatment_types?: sub_treatment_typesOmit
    treatment_types?: treatment_typesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Diagnosis_typesCountOutputType
   */

  export type Diagnosis_typesCountOutputType = {
    opd_diagnosis_types: number
  }

  export type Diagnosis_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd_diagnosis_types?: boolean | Diagnosis_typesCountOutputTypeCountOpd_diagnosis_typesArgs
  }

  // Custom InputTypes
  /**
   * Diagnosis_typesCountOutputType without action
   */
  export type Diagnosis_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis_typesCountOutputType
     */
    select?: Diagnosis_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Diagnosis_typesCountOutputType without action
   */
  export type Diagnosis_typesCountOutputTypeCountOpd_diagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opd_diagnosis_typesWhereInput
  }


  /**
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    opd: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | DoctorsCountOutputTypeCountOpdArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountOpdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opdWhereInput
  }


  /**
   * Count Type HospitalsCountOutputType
   */

  export type HospitalsCountOutputType = {
    diagnosis_types: number
    doctors: number
    patients: number
    treatment_types: number
  }

  export type HospitalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis_types?: boolean | HospitalsCountOutputTypeCountDiagnosis_typesArgs
    doctors?: boolean | HospitalsCountOutputTypeCountDoctorsArgs
    patients?: boolean | HospitalsCountOutputTypeCountPatientsArgs
    treatment_types?: boolean | HospitalsCountOutputTypeCountTreatment_typesArgs
  }

  // Custom InputTypes
  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalsCountOutputType
     */
    select?: HospitalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeCountDiagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosis_typesWhereInput
  }

  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorsWhereInput
  }

  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
  }

  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeCountTreatment_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: treatment_typesWhereInput
  }


  /**
   * Count Type OpdCountOutputType
   */

  export type OpdCountOutputType = {
    opd_diagnosis_types: number
    receipts: number
  }

  export type OpdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd_diagnosis_types?: boolean | OpdCountOutputTypeCountOpd_diagnosis_typesArgs
    receipts?: boolean | OpdCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * OpdCountOutputType without action
   */
  export type OpdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpdCountOutputType
     */
    select?: OpdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpdCountOutputType without action
   */
  export type OpdCountOutputTypeCountOpd_diagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opd_diagnosis_typesWhereInput
  }

  /**
   * OpdCountOutputType without action
   */
  export type OpdCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptsWhereInput
  }


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    opd: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | PatientsCountOutputTypeCountOpdArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountOpdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opdWhereInput
  }


  /**
   * Count Type ReceiptsCountOutputType
   */

  export type ReceiptsCountOutputType = {
    receipt_tran: number
  }

  export type ReceiptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt_tran?: boolean | ReceiptsCountOutputTypeCountReceipt_tranArgs
  }

  // Custom InputTypes
  /**
   * ReceiptsCountOutputType without action
   */
  export type ReceiptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptsCountOutputType
     */
    select?: ReceiptsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptsCountOutputType without action
   */
  export type ReceiptsCountOutputTypeCountReceipt_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receipt_tranWhereInput
  }


  /**
   * Count Type Sub_treatment_typesCountOutputType
   */

  export type Sub_treatment_typesCountOutputType = {
    receipt_tran: number
  }

  export type Sub_treatment_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt_tran?: boolean | Sub_treatment_typesCountOutputTypeCountReceipt_tranArgs
  }

  // Custom InputTypes
  /**
   * Sub_treatment_typesCountOutputType without action
   */
  export type Sub_treatment_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_treatment_typesCountOutputType
     */
    select?: Sub_treatment_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sub_treatment_typesCountOutputType without action
   */
  export type Sub_treatment_typesCountOutputTypeCountReceipt_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receipt_tranWhereInput
  }


  /**
   * Count Type Treatment_typesCountOutputType
   */

  export type Treatment_typesCountOutputType = {
    sub_treatment_types: number
  }

  export type Treatment_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_treatment_types?: boolean | Treatment_typesCountOutputTypeCountSub_treatment_typesArgs
  }

  // Custom InputTypes
  /**
   * Treatment_typesCountOutputType without action
   */
  export type Treatment_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment_typesCountOutputType
     */
    select?: Treatment_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Treatment_typesCountOutputType without action
   */
  export type Treatment_typesCountOutputTypeCountSub_treatment_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_treatment_typesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model diagnosis_types
   */

  export type AggregateDiagnosis_types = {
    _count: Diagnosis_typesCountAggregateOutputType | null
    _avg: Diagnosis_typesAvgAggregateOutputType | null
    _sum: Diagnosis_typesSumAggregateOutputType | null
    _min: Diagnosis_typesMinAggregateOutputType | null
    _max: Diagnosis_typesMaxAggregateOutputType | null
  }

  export type Diagnosis_typesAvgAggregateOutputType = {
    diagnosis_type_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type Diagnosis_typesSumAggregateOutputType = {
    diagnosis_type_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type Diagnosis_typesMinAggregateOutputType = {
    diagnosis_type_id: number | null
    diagnosis_type_name: string | null
    diagnosis_type_short_name: string | null
    is_active: boolean | null
    hospital_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Diagnosis_typesMaxAggregateOutputType = {
    diagnosis_type_id: number | null
    diagnosis_type_name: string | null
    diagnosis_type_short_name: string | null
    is_active: boolean | null
    hospital_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Diagnosis_typesCountAggregateOutputType = {
    diagnosis_type_id: number
    diagnosis_type_name: number
    diagnosis_type_short_name: number
    is_active: number
    hospital_id: number
    description: number
    user_id: number
    created: number
    modified: number
    _all: number
  }


  export type Diagnosis_typesAvgAggregateInputType = {
    diagnosis_type_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type Diagnosis_typesSumAggregateInputType = {
    diagnosis_type_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type Diagnosis_typesMinAggregateInputType = {
    diagnosis_type_id?: true
    diagnosis_type_name?: true
    diagnosis_type_short_name?: true
    is_active?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Diagnosis_typesMaxAggregateInputType = {
    diagnosis_type_id?: true
    diagnosis_type_name?: true
    diagnosis_type_short_name?: true
    is_active?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Diagnosis_typesCountAggregateInputType = {
    diagnosis_type_id?: true
    diagnosis_type_name?: true
    diagnosis_type_short_name?: true
    is_active?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type Diagnosis_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosis_types to aggregate.
     */
    where?: diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosis_types to fetch.
     */
    orderBy?: diagnosis_typesOrderByWithRelationInput | diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnosis_types
    **/
    _count?: true | Diagnosis_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Diagnosis_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Diagnosis_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Diagnosis_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Diagnosis_typesMaxAggregateInputType
  }

  export type GetDiagnosis_typesAggregateType<T extends Diagnosis_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosis_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosis_types[P]>
      : GetScalarType<T[P], AggregateDiagnosis_types[P]>
  }




  export type diagnosis_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosis_typesWhereInput
    orderBy?: diagnosis_typesOrderByWithAggregationInput | diagnosis_typesOrderByWithAggregationInput[]
    by: Diagnosis_typesScalarFieldEnum[] | Diagnosis_typesScalarFieldEnum
    having?: diagnosis_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Diagnosis_typesCountAggregateInputType | true
    _avg?: Diagnosis_typesAvgAggregateInputType
    _sum?: Diagnosis_typesSumAggregateInputType
    _min?: Diagnosis_typesMinAggregateInputType
    _max?: Diagnosis_typesMaxAggregateInputType
  }

  export type Diagnosis_typesGroupByOutputType = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name: string | null
    is_active: boolean
    hospital_id: number
    description: string | null
    user_id: number
    created: Date
    modified: Date
    _count: Diagnosis_typesCountAggregateOutputType | null
    _avg: Diagnosis_typesAvgAggregateOutputType | null
    _sum: Diagnosis_typesSumAggregateOutputType | null
    _min: Diagnosis_typesMinAggregateOutputType | null
    _max: Diagnosis_typesMaxAggregateOutputType | null
  }

  type GetDiagnosis_typesGroupByPayload<T extends diagnosis_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Diagnosis_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Diagnosis_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Diagnosis_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Diagnosis_typesGroupByOutputType[P]>
        }
      >
    >


  export type diagnosis_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_type_id?: boolean
    diagnosis_type_name?: boolean
    diagnosis_type_short_name?: boolean
    is_active?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    opd_diagnosis_types?: boolean | diagnosis_types$opd_diagnosis_typesArgs<ExtArgs>
    _count?: boolean | Diagnosis_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis_types"]>

  export type diagnosis_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_type_id?: boolean
    diagnosis_type_name?: boolean
    diagnosis_type_short_name?: boolean
    is_active?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis_types"]>

  export type diagnosis_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_type_id?: boolean
    diagnosis_type_name?: boolean
    diagnosis_type_short_name?: boolean
    is_active?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis_types"]>

  export type diagnosis_typesSelectScalar = {
    diagnosis_type_id?: boolean
    diagnosis_type_name?: boolean
    diagnosis_type_short_name?: boolean
    is_active?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
  }

  export type diagnosis_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnosis_type_id" | "diagnosis_type_name" | "diagnosis_type_short_name" | "is_active" | "hospital_id" | "description" | "user_id" | "created" | "modified", ExtArgs["result"]["diagnosis_types"]>
  export type diagnosis_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    opd_diagnosis_types?: boolean | diagnosis_types$opd_diagnosis_typesArgs<ExtArgs>
    _count?: boolean | Diagnosis_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type diagnosis_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }
  export type diagnosis_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }

  export type $diagnosis_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnosis_types"
    objects: {
      hospitals: Prisma.$hospitalsPayload<ExtArgs>
      opd_diagnosis_types: Prisma.$opd_diagnosis_typesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnosis_type_id: number
      diagnosis_type_name: string
      diagnosis_type_short_name: string | null
      is_active: boolean
      hospital_id: number
      description: string | null
      user_id: number
      created: Date
      modified: Date
    }, ExtArgs["result"]["diagnosis_types"]>
    composites: {}
  }

  type diagnosis_typesGetPayload<S extends boolean | null | undefined | diagnosis_typesDefaultArgs> = $Result.GetResult<Prisma.$diagnosis_typesPayload, S>

  type diagnosis_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diagnosis_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Diagnosis_typesCountAggregateInputType | true
    }

  export interface diagnosis_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnosis_types'], meta: { name: 'diagnosis_types' } }
    /**
     * Find zero or one Diagnosis_types that matches the filter.
     * @param {diagnosis_typesFindUniqueArgs} args - Arguments to find a Diagnosis_types
     * @example
     * // Get one Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosis_typesFindUniqueArgs>(args: SelectSubset<T, diagnosis_typesFindUniqueArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnosis_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diagnosis_typesFindUniqueOrThrowArgs} args - Arguments to find a Diagnosis_types
     * @example
     * // Get one Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosis_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosis_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesFindFirstArgs} args - Arguments to find a Diagnosis_types
     * @example
     * // Get one Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosis_typesFindFirstArgs>(args?: SelectSubset<T, diagnosis_typesFindFirstArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesFindFirstOrThrowArgs} args - Arguments to find a Diagnosis_types
     * @example
     * // Get one Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosis_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosis_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosis_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findMany()
     * 
     * // Get first 10 Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.findMany({ take: 10 })
     * 
     * // Only select the `diagnosis_type_id`
     * const diagnosis_typesWithDiagnosis_type_idOnly = await prisma.diagnosis_types.findMany({ select: { diagnosis_type_id: true } })
     * 
     */
    findMany<T extends diagnosis_typesFindManyArgs>(args?: SelectSubset<T, diagnosis_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnosis_types.
     * @param {diagnosis_typesCreateArgs} args - Arguments to create a Diagnosis_types.
     * @example
     * // Create one Diagnosis_types
     * const Diagnosis_types = await prisma.diagnosis_types.create({
     *   data: {
     *     // ... data to create a Diagnosis_types
     *   }
     * })
     * 
     */
    create<T extends diagnosis_typesCreateArgs>(args: SelectSubset<T, diagnosis_typesCreateArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosis_types.
     * @param {diagnosis_typesCreateManyArgs} args - Arguments to create many Diagnosis_types.
     * @example
     * // Create many Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosis_typesCreateManyArgs>(args?: SelectSubset<T, diagnosis_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnosis_types and returns the data saved in the database.
     * @param {diagnosis_typesCreateManyAndReturnArgs} args - Arguments to create many Diagnosis_types.
     * @example
     * // Create many Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnosis_types and only return the `diagnosis_type_id`
     * const diagnosis_typesWithDiagnosis_type_idOnly = await prisma.diagnosis_types.createManyAndReturn({
     *   select: { diagnosis_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diagnosis_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, diagnosis_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnosis_types.
     * @param {diagnosis_typesDeleteArgs} args - Arguments to delete one Diagnosis_types.
     * @example
     * // Delete one Diagnosis_types
     * const Diagnosis_types = await prisma.diagnosis_types.delete({
     *   where: {
     *     // ... filter to delete one Diagnosis_types
     *   }
     * })
     * 
     */
    delete<T extends diagnosis_typesDeleteArgs>(args: SelectSubset<T, diagnosis_typesDeleteArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnosis_types.
     * @param {diagnosis_typesUpdateArgs} args - Arguments to update one Diagnosis_types.
     * @example
     * // Update one Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diagnosis_typesUpdateArgs>(args: SelectSubset<T, diagnosis_typesUpdateArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosis_types.
     * @param {diagnosis_typesDeleteManyArgs} args - Arguments to filter Diagnosis_types to delete.
     * @example
     * // Delete a few Diagnosis_types
     * const { count } = await prisma.diagnosis_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosis_typesDeleteManyArgs>(args?: SelectSubset<T, diagnosis_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diagnosis_typesUpdateManyArgs>(args: SelectSubset<T, diagnosis_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosis_types and returns the data updated in the database.
     * @param {diagnosis_typesUpdateManyAndReturnArgs} args - Arguments to update many Diagnosis_types.
     * @example
     * // Update many Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnosis_types and only return the `diagnosis_type_id`
     * const diagnosis_typesWithDiagnosis_type_idOnly = await prisma.diagnosis_types.updateManyAndReturn({
     *   select: { diagnosis_type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends diagnosis_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, diagnosis_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnosis_types.
     * @param {diagnosis_typesUpsertArgs} args - Arguments to update or create a Diagnosis_types.
     * @example
     * // Update or create a Diagnosis_types
     * const diagnosis_types = await prisma.diagnosis_types.upsert({
     *   create: {
     *     // ... data to create a Diagnosis_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosis_types we want to update
     *   }
     * })
     */
    upsert<T extends diagnosis_typesUpsertArgs>(args: SelectSubset<T, diagnosis_typesUpsertArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesCountArgs} args - Arguments to filter Diagnosis_types to count.
     * @example
     * // Count the number of Diagnosis_types
     * const count = await prisma.diagnosis_types.count({
     *   where: {
     *     // ... the filter for the Diagnosis_types we want to count
     *   }
     * })
    **/
    count<T extends diagnosis_typesCountArgs>(
      args?: Subset<T, diagnosis_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Diagnosis_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Diagnosis_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Diagnosis_typesAggregateArgs>(args: Subset<T, Diagnosis_typesAggregateArgs>): Prisma.PrismaPromise<GetDiagnosis_typesAggregateType<T>>

    /**
     * Group by Diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosis_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends diagnosis_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosis_typesGroupByArgs['orderBy'] }
        : { orderBy?: diagnosis_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, diagnosis_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosis_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnosis_types model
   */
  readonly fields: diagnosis_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnosis_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosis_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospitals<T extends hospitalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalsDefaultArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opd_diagnosis_types<T extends diagnosis_types$opd_diagnosis_typesArgs<ExtArgs> = {}>(args?: Subset<T, diagnosis_types$opd_diagnosis_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the diagnosis_types model
   */
  interface diagnosis_typesFieldRefs {
    readonly diagnosis_type_id: FieldRef<"diagnosis_types", 'Int'>
    readonly diagnosis_type_name: FieldRef<"diagnosis_types", 'String'>
    readonly diagnosis_type_short_name: FieldRef<"diagnosis_types", 'String'>
    readonly is_active: FieldRef<"diagnosis_types", 'Boolean'>
    readonly hospital_id: FieldRef<"diagnosis_types", 'Int'>
    readonly description: FieldRef<"diagnosis_types", 'String'>
    readonly user_id: FieldRef<"diagnosis_types", 'Int'>
    readonly created: FieldRef<"diagnosis_types", 'DateTime'>
    readonly modified: FieldRef<"diagnosis_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * diagnosis_types findUnique
   */
  export type diagnosis_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which diagnosis_types to fetch.
     */
    where: diagnosis_typesWhereUniqueInput
  }

  /**
   * diagnosis_types findUniqueOrThrow
   */
  export type diagnosis_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which diagnosis_types to fetch.
     */
    where: diagnosis_typesWhereUniqueInput
  }

  /**
   * diagnosis_types findFirst
   */
  export type diagnosis_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which diagnosis_types to fetch.
     */
    where?: diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosis_types to fetch.
     */
    orderBy?: diagnosis_typesOrderByWithRelationInput | diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosis_types.
     */
    cursor?: diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosis_types.
     */
    distinct?: Diagnosis_typesScalarFieldEnum | Diagnosis_typesScalarFieldEnum[]
  }

  /**
   * diagnosis_types findFirstOrThrow
   */
  export type diagnosis_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which diagnosis_types to fetch.
     */
    where?: diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosis_types to fetch.
     */
    orderBy?: diagnosis_typesOrderByWithRelationInput | diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosis_types.
     */
    cursor?: diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosis_types.
     */
    distinct?: Diagnosis_typesScalarFieldEnum | Diagnosis_typesScalarFieldEnum[]
  }

  /**
   * diagnosis_types findMany
   */
  export type diagnosis_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which diagnosis_types to fetch.
     */
    where?: diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosis_types to fetch.
     */
    orderBy?: diagnosis_typesOrderByWithRelationInput | diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnosis_types.
     */
    cursor?: diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosis_types.
     */
    skip?: number
    distinct?: Diagnosis_typesScalarFieldEnum | Diagnosis_typesScalarFieldEnum[]
  }

  /**
   * diagnosis_types create
   */
  export type diagnosis_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnosis_types.
     */
    data: XOR<diagnosis_typesCreateInput, diagnosis_typesUncheckedCreateInput>
  }

  /**
   * diagnosis_types createMany
   */
  export type diagnosis_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnosis_types.
     */
    data: diagnosis_typesCreateManyInput | diagnosis_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnosis_types createManyAndReturn
   */
  export type diagnosis_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * The data used to create many diagnosis_types.
     */
    data: diagnosis_typesCreateManyInput | diagnosis_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnosis_types update
   */
  export type diagnosis_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnosis_types.
     */
    data: XOR<diagnosis_typesUpdateInput, diagnosis_typesUncheckedUpdateInput>
    /**
     * Choose, which diagnosis_types to update.
     */
    where: diagnosis_typesWhereUniqueInput
  }

  /**
   * diagnosis_types updateMany
   */
  export type diagnosis_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnosis_types.
     */
    data: XOR<diagnosis_typesUpdateManyMutationInput, diagnosis_typesUncheckedUpdateManyInput>
    /**
     * Filter which diagnosis_types to update
     */
    where?: diagnosis_typesWhereInput
    /**
     * Limit how many diagnosis_types to update.
     */
    limit?: number
  }

  /**
   * diagnosis_types updateManyAndReturn
   */
  export type diagnosis_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * The data used to update diagnosis_types.
     */
    data: XOR<diagnosis_typesUpdateManyMutationInput, diagnosis_typesUncheckedUpdateManyInput>
    /**
     * Filter which diagnosis_types to update
     */
    where?: diagnosis_typesWhereInput
    /**
     * Limit how many diagnosis_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnosis_types upsert
   */
  export type diagnosis_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnosis_types to update in case it exists.
     */
    where: diagnosis_typesWhereUniqueInput
    /**
     * In case the diagnosis_types found by the `where` argument doesn't exist, create a new diagnosis_types with this data.
     */
    create: XOR<diagnosis_typesCreateInput, diagnosis_typesUncheckedCreateInput>
    /**
     * In case the diagnosis_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosis_typesUpdateInput, diagnosis_typesUncheckedUpdateInput>
  }

  /**
   * diagnosis_types delete
   */
  export type diagnosis_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter which diagnosis_types to delete.
     */
    where: diagnosis_typesWhereUniqueInput
  }

  /**
   * diagnosis_types deleteMany
   */
  export type diagnosis_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosis_types to delete
     */
    where?: diagnosis_typesWhereInput
    /**
     * Limit how many diagnosis_types to delete.
     */
    limit?: number
  }

  /**
   * diagnosis_types.opd_diagnosis_types
   */
  export type diagnosis_types$opd_diagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    where?: opd_diagnosis_typesWhereInput
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    cursor?: opd_diagnosis_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Opd_diagnosis_typesScalarFieldEnum | Opd_diagnosis_typesScalarFieldEnum[]
  }

  /**
   * diagnosis_types without action
   */
  export type diagnosis_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
  }


  /**
   * Model doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsAvgAggregateOutputType = {
    doctor_id: number | null
    staff_id: number | null
    student_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type DoctorsSumAggregateOutputType = {
    doctor_id: number | null
    staff_id: number | null
    student_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type DoctorsMinAggregateOutputType = {
    doctor_id: number | null
    doctor_name: string | null
    staff_id: number | null
    student_id: number | null
    hospital_id: number | null
    mobile_no: string | null
    email: string | null
    specialization: string | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type DoctorsMaxAggregateOutputType = {
    doctor_id: number | null
    doctor_name: string | null
    staff_id: number | null
    student_id: number | null
    hospital_id: number | null
    mobile_no: string | null
    email: string | null
    specialization: string | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type DoctorsCountAggregateOutputType = {
    doctor_id: number
    doctor_name: number
    staff_id: number
    student_id: number
    hospital_id: number
    mobile_no: number
    email: number
    specialization: number
    description: number
    user_id: number
    created: number
    modified: number
    _all: number
  }


  export type DoctorsAvgAggregateInputType = {
    doctor_id?: true
    staff_id?: true
    student_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type DoctorsSumAggregateInputType = {
    doctor_id?: true
    staff_id?: true
    student_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type DoctorsMinAggregateInputType = {
    doctor_id?: true
    doctor_name?: true
    staff_id?: true
    student_id?: true
    hospital_id?: true
    mobile_no?: true
    email?: true
    specialization?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type DoctorsMaxAggregateInputType = {
    doctor_id?: true
    doctor_name?: true
    staff_id?: true
    student_id?: true
    hospital_id?: true
    mobile_no?: true
    email?: true
    specialization?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type DoctorsCountAggregateInputType = {
    doctor_id?: true
    doctor_name?: true
    staff_id?: true
    student_id?: true
    hospital_id?: true
    mobile_no?: true
    email?: true
    specialization?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to aggregate.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type doctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorsWhereInput
    orderBy?: doctorsOrderByWithAggregationInput | doctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: doctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _avg?: DoctorsAvgAggregateInputType
    _sum?: DoctorsSumAggregateInputType
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    doctor_id: number
    doctor_name: string
    staff_id: number | null
    student_id: number | null
    hospital_id: number
    mobile_no: string | null
    email: string | null
    specialization: string | null
    description: string | null
    user_id: number
    created: Date
    modified: Date
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends doctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type doctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    doctor_name?: boolean
    staff_id?: boolean
    student_id?: boolean
    hospital_id?: boolean
    mobile_no?: boolean
    email?: boolean
    specialization?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    opd?: boolean | doctors$opdArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    doctor_name?: boolean
    staff_id?: boolean
    student_id?: boolean
    hospital_id?: boolean
    mobile_no?: boolean
    email?: boolean
    specialization?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    doctor_name?: boolean
    staff_id?: boolean
    student_id?: boolean
    hospital_id?: boolean
    mobile_no?: boolean
    email?: boolean
    specialization?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectScalar = {
    doctor_id?: boolean
    doctor_name?: boolean
    staff_id?: boolean
    student_id?: boolean
    hospital_id?: boolean
    mobile_no?: boolean
    email?: boolean
    specialization?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
  }

  export type doctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doctor_id" | "doctor_name" | "staff_id" | "student_id" | "hospital_id" | "mobile_no" | "email" | "specialization" | "description" | "user_id" | "created" | "modified", ExtArgs["result"]["doctors"]>
  export type doctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    opd?: boolean | doctors$opdArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doctorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }
  export type doctorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }

  export type $doctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctors"
    objects: {
      hospitals: Prisma.$hospitalsPayload<ExtArgs>
      opd: Prisma.$opdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      doctor_id: number
      doctor_name: string
      staff_id: number | null
      student_id: number | null
      hospital_id: number
      mobile_no: string | null
      email: string | null
      specialization: string | null
      description: string | null
      user_id: number
      created: Date
      modified: Date
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type doctorsGetPayload<S extends boolean | null | undefined | doctorsDefaultArgs> = $Result.GetResult<Prisma.$doctorsPayload, S>

  type doctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface doctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctors'], meta: { name: 'doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {doctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorsFindUniqueArgs>(args: SelectSubset<T, doctorsFindUniqueArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorsFindFirstArgs>(args?: SelectSubset<T, doctorsFindFirstArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.findMany({ select: { doctor_id: true } })
     * 
     */
    findMany<T extends doctorsFindManyArgs>(args?: SelectSubset<T, doctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctors.
     * @param {doctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends doctorsCreateArgs>(args: SelectSubset<T, doctorsCreateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorsCreateManyArgs>(args?: SelectSubset<T, doctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {doctorsCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.createManyAndReturn({
     *   select: { doctor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorsCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctors.
     * @param {doctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends doctorsDeleteArgs>(args: SelectSubset<T, doctorsDeleteArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctors.
     * @param {doctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorsUpdateArgs>(args: SelectSubset<T, doctorsUpdateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorsDeleteManyArgs>(args?: SelectSubset<T, doctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorsUpdateManyArgs>(args: SelectSubset<T, doctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {doctorsUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.updateManyAndReturn({
     *   select: { doctor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends doctorsUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctors.
     * @param {doctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends doctorsUpsertArgs>(args: SelectSubset<T, doctorsUpsertArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorsCountArgs>(
      args?: Subset<T, doctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorsGroupByArgs['orderBy'] }
        : { orderBy?: doctorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctors model
   */
  readonly fields: doctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospitals<T extends hospitalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalsDefaultArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opd<T extends doctors$opdArgs<ExtArgs> = {}>(args?: Subset<T, doctors$opdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctors model
   */
  interface doctorsFieldRefs {
    readonly doctor_id: FieldRef<"doctors", 'Int'>
    readonly doctor_name: FieldRef<"doctors", 'String'>
    readonly staff_id: FieldRef<"doctors", 'Int'>
    readonly student_id: FieldRef<"doctors", 'Int'>
    readonly hospital_id: FieldRef<"doctors", 'Int'>
    readonly mobile_no: FieldRef<"doctors", 'String'>
    readonly email: FieldRef<"doctors", 'String'>
    readonly specialization: FieldRef<"doctors", 'String'>
    readonly description: FieldRef<"doctors", 'String'>
    readonly user_id: FieldRef<"doctors", 'Int'>
    readonly created: FieldRef<"doctors", 'DateTime'>
    readonly modified: FieldRef<"doctors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * doctors findUnique
   */
  export type doctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findUniqueOrThrow
   */
  export type doctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findFirst
   */
  export type doctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findFirstOrThrow
   */
  export type doctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findMany
   */
  export type doctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors create
   */
  export type doctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a doctors.
     */
    data: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
  }

  /**
   * doctors createMany
   */
  export type doctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctors createManyAndReturn
   */
  export type doctorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctors update
   */
  export type doctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a doctors.
     */
    data: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
    /**
     * Choose, which doctors to update.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors updateMany
   */
  export type doctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctors updateManyAndReturn
   */
  export type doctorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctors upsert
   */
  export type doctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the doctors to update in case it exists.
     */
    where: doctorsWhereUniqueInput
    /**
     * In case the doctors found by the `where` argument doesn't exist, create a new doctors with this data.
     */
    create: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
    /**
     * In case the doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
  }

  /**
   * doctors delete
   */
  export type doctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter which doctors to delete.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors deleteMany
   */
  export type doctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctors.opd
   */
  export type doctors$opdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    where?: opdWhereInput
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    cursor?: opdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * doctors without action
   */
  export type doctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
  }


  /**
   * Model hospitals
   */

  export type AggregateHospitals = {
    _count: HospitalsCountAggregateOutputType | null
    _avg: HospitalsAvgAggregateOutputType | null
    _sum: HospitalsSumAggregateOutputType | null
    _min: HospitalsMinAggregateOutputType | null
    _max: HospitalsMaxAggregateOutputType | null
  }

  export type HospitalsAvgAggregateOutputType = {
    hospital_id: number | null
    default_payment_mode_id: number | null
    registration_charge: Decimal | null
    registration_validity_months: number | null
    opening_patient_no: number | null
    opening_opd_no: number | null
    opening_receipt_no: number | null
    user_id: number | null
  }

  export type HospitalsSumAggregateOutputType = {
    hospital_id: number | null
    default_payment_mode_id: number | null
    registration_charge: Decimal | null
    registration_validity_months: number | null
    opening_patient_no: number | null
    opening_opd_no: number | null
    opening_receipt_no: number | null
    user_id: number | null
  }

  export type HospitalsMinAggregateOutputType = {
    hospital_id: number | null
    hospital_name: string | null
    default_payment_mode_id: number | null
    registration_charge: Decimal | null
    registration_validity_months: number | null
    opening_date: Date | null
    opening_patient_no: number | null
    opening_opd_no: number | null
    opening_receipt_no: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    address: string | null
    is_rate_enable_in_receipt: boolean | null
    is_registration_fee_enable_in_opd: boolean | null
  }

  export type HospitalsMaxAggregateOutputType = {
    hospital_id: number | null
    hospital_name: string | null
    default_payment_mode_id: number | null
    registration_charge: Decimal | null
    registration_validity_months: number | null
    opening_date: Date | null
    opening_patient_no: number | null
    opening_opd_no: number | null
    opening_receipt_no: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    address: string | null
    is_rate_enable_in_receipt: boolean | null
    is_registration_fee_enable_in_opd: boolean | null
  }

  export type HospitalsCountAggregateOutputType = {
    hospital_id: number
    hospital_name: number
    default_payment_mode_id: number
    registration_charge: number
    registration_validity_months: number
    opening_date: number
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description: number
    user_id: number
    created: number
    modified: number
    address: number
    is_rate_enable_in_receipt: number
    is_registration_fee_enable_in_opd: number
    _all: number
  }


  export type HospitalsAvgAggregateInputType = {
    hospital_id?: true
    default_payment_mode_id?: true
    registration_charge?: true
    registration_validity_months?: true
    opening_patient_no?: true
    opening_opd_no?: true
    opening_receipt_no?: true
    user_id?: true
  }

  export type HospitalsSumAggregateInputType = {
    hospital_id?: true
    default_payment_mode_id?: true
    registration_charge?: true
    registration_validity_months?: true
    opening_patient_no?: true
    opening_opd_no?: true
    opening_receipt_no?: true
    user_id?: true
  }

  export type HospitalsMinAggregateInputType = {
    hospital_id?: true
    hospital_name?: true
    default_payment_mode_id?: true
    registration_charge?: true
    registration_validity_months?: true
    opening_date?: true
    opening_patient_no?: true
    opening_opd_no?: true
    opening_receipt_no?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    address?: true
    is_rate_enable_in_receipt?: true
    is_registration_fee_enable_in_opd?: true
  }

  export type HospitalsMaxAggregateInputType = {
    hospital_id?: true
    hospital_name?: true
    default_payment_mode_id?: true
    registration_charge?: true
    registration_validity_months?: true
    opening_date?: true
    opening_patient_no?: true
    opening_opd_no?: true
    opening_receipt_no?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    address?: true
    is_rate_enable_in_receipt?: true
    is_registration_fee_enable_in_opd?: true
  }

  export type HospitalsCountAggregateInputType = {
    hospital_id?: true
    hospital_name?: true
    default_payment_mode_id?: true
    registration_charge?: true
    registration_validity_months?: true
    opening_date?: true
    opening_patient_no?: true
    opening_opd_no?: true
    opening_receipt_no?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    address?: true
    is_rate_enable_in_receipt?: true
    is_registration_fee_enable_in_opd?: true
    _all?: true
  }

  export type HospitalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to aggregate.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hospitals
    **/
    _count?: true | HospitalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalsMaxAggregateInputType
  }

  export type GetHospitalsAggregateType<T extends HospitalsAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitals[P]>
      : GetScalarType<T[P], AggregateHospitals[P]>
  }




  export type hospitalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalsWhereInput
    orderBy?: hospitalsOrderByWithAggregationInput | hospitalsOrderByWithAggregationInput[]
    by: HospitalsScalarFieldEnum[] | HospitalsScalarFieldEnum
    having?: hospitalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalsCountAggregateInputType | true
    _avg?: HospitalsAvgAggregateInputType
    _sum?: HospitalsSumAggregateInputType
    _min?: HospitalsMinAggregateInputType
    _max?: HospitalsMaxAggregateInputType
  }

  export type HospitalsGroupByOutputType = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id: number | null
    registration_charge: Decimal | null
    registration_validity_months: number | null
    opening_date: Date
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description: string | null
    user_id: number
    created: Date
    modified: Date
    address: string | null
    is_rate_enable_in_receipt: boolean | null
    is_registration_fee_enable_in_opd: boolean | null
    _count: HospitalsCountAggregateOutputType | null
    _avg: HospitalsAvgAggregateOutputType | null
    _sum: HospitalsSumAggregateOutputType | null
    _min: HospitalsMinAggregateOutputType | null
    _max: HospitalsMaxAggregateOutputType | null
  }

  type GetHospitalsGroupByPayload<T extends hospitalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalsGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalsGroupByOutputType[P]>
        }
      >
    >


  export type hospitalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hospital_id?: boolean
    hospital_name?: boolean
    default_payment_mode_id?: boolean
    registration_charge?: boolean
    registration_validity_months?: boolean
    opening_date?: boolean
    opening_patient_no?: boolean
    opening_opd_no?: boolean
    opening_receipt_no?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    address?: boolean
    is_rate_enable_in_receipt?: boolean
    is_registration_fee_enable_in_opd?: boolean
    diagnosis_types?: boolean | hospitals$diagnosis_typesArgs<ExtArgs>
    doctors?: boolean | hospitals$doctorsArgs<ExtArgs>
    patients?: boolean | hospitals$patientsArgs<ExtArgs>
    treatment_types?: boolean | hospitals$treatment_typesArgs<ExtArgs>
    _count?: boolean | HospitalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hospital_id?: boolean
    hospital_name?: boolean
    default_payment_mode_id?: boolean
    registration_charge?: boolean
    registration_validity_months?: boolean
    opening_date?: boolean
    opening_patient_no?: boolean
    opening_opd_no?: boolean
    opening_receipt_no?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    address?: boolean
    is_rate_enable_in_receipt?: boolean
    is_registration_fee_enable_in_opd?: boolean
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hospital_id?: boolean
    hospital_name?: boolean
    default_payment_mode_id?: boolean
    registration_charge?: boolean
    registration_validity_months?: boolean
    opening_date?: boolean
    opening_patient_no?: boolean
    opening_opd_no?: boolean
    opening_receipt_no?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    address?: boolean
    is_rate_enable_in_receipt?: boolean
    is_registration_fee_enable_in_opd?: boolean
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectScalar = {
    hospital_id?: boolean
    hospital_name?: boolean
    default_payment_mode_id?: boolean
    registration_charge?: boolean
    registration_validity_months?: boolean
    opening_date?: boolean
    opening_patient_no?: boolean
    opening_opd_no?: boolean
    opening_receipt_no?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    address?: boolean
    is_rate_enable_in_receipt?: boolean
    is_registration_fee_enable_in_opd?: boolean
  }

  export type hospitalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hospital_id" | "hospital_name" | "default_payment_mode_id" | "registration_charge" | "registration_validity_months" | "opening_date" | "opening_patient_no" | "opening_opd_no" | "opening_receipt_no" | "description" | "user_id" | "created" | "modified" | "address" | "is_rate_enable_in_receipt" | "is_registration_fee_enable_in_opd", ExtArgs["result"]["hospitals"]>
  export type hospitalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis_types?: boolean | hospitals$diagnosis_typesArgs<ExtArgs>
    doctors?: boolean | hospitals$doctorsArgs<ExtArgs>
    patients?: boolean | hospitals$patientsArgs<ExtArgs>
    treatment_types?: boolean | hospitals$treatment_typesArgs<ExtArgs>
    _count?: boolean | HospitalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hospitalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hospitalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hospitalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hospitals"
    objects: {
      diagnosis_types: Prisma.$diagnosis_typesPayload<ExtArgs>[]
      doctors: Prisma.$doctorsPayload<ExtArgs>[]
      patients: Prisma.$patientsPayload<ExtArgs>[]
      treatment_types: Prisma.$treatment_typesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hospital_id: number
      hospital_name: string
      default_payment_mode_id: number | null
      registration_charge: Prisma.Decimal | null
      registration_validity_months: number | null
      opening_date: Date
      opening_patient_no: number
      opening_opd_no: number
      opening_receipt_no: number
      description: string | null
      user_id: number
      created: Date
      modified: Date
      address: string | null
      is_rate_enable_in_receipt: boolean | null
      is_registration_fee_enable_in_opd: boolean | null
    }, ExtArgs["result"]["hospitals"]>
    composites: {}
  }

  type hospitalsGetPayload<S extends boolean | null | undefined | hospitalsDefaultArgs> = $Result.GetResult<Prisma.$hospitalsPayload, S>

  type hospitalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hospitalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalsCountAggregateInputType | true
    }

  export interface hospitalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospitals'], meta: { name: 'hospitals' } }
    /**
     * Find zero or one Hospitals that matches the filter.
     * @param {hospitalsFindUniqueArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hospitalsFindUniqueArgs>(args: SelectSubset<T, hospitalsFindUniqueArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospitals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hospitalsFindUniqueOrThrowArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hospitalsFindUniqueOrThrowArgs>(args: SelectSubset<T, hospitalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindFirstArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hospitalsFindFirstArgs>(args?: SelectSubset<T, hospitalsFindFirstArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindFirstOrThrowArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hospitalsFindFirstOrThrowArgs>(args?: SelectSubset<T, hospitalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospitals.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospitals.findMany({ take: 10 })
     * 
     * // Only select the `hospital_id`
     * const hospitalsWithHospital_idOnly = await prisma.hospitals.findMany({ select: { hospital_id: true } })
     * 
     */
    findMany<T extends hospitalsFindManyArgs>(args?: SelectSubset<T, hospitalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospitals.
     * @param {hospitalsCreateArgs} args - Arguments to create a Hospitals.
     * @example
     * // Create one Hospitals
     * const Hospitals = await prisma.hospitals.create({
     *   data: {
     *     // ... data to create a Hospitals
     *   }
     * })
     * 
     */
    create<T extends hospitalsCreateArgs>(args: SelectSubset<T, hospitalsCreateArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {hospitalsCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospitals = await prisma.hospitals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hospitalsCreateManyArgs>(args?: SelectSubset<T, hospitalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {hospitalsCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospitals = await prisma.hospitals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `hospital_id`
     * const hospitalsWithHospital_idOnly = await prisma.hospitals.createManyAndReturn({
     *   select: { hospital_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hospitalsCreateManyAndReturnArgs>(args?: SelectSubset<T, hospitalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospitals.
     * @param {hospitalsDeleteArgs} args - Arguments to delete one Hospitals.
     * @example
     * // Delete one Hospitals
     * const Hospitals = await prisma.hospitals.delete({
     *   where: {
     *     // ... filter to delete one Hospitals
     *   }
     * })
     * 
     */
    delete<T extends hospitalsDeleteArgs>(args: SelectSubset<T, hospitalsDeleteArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospitals.
     * @param {hospitalsUpdateArgs} args - Arguments to update one Hospitals.
     * @example
     * // Update one Hospitals
     * const hospitals = await prisma.hospitals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hospitalsUpdateArgs>(args: SelectSubset<T, hospitalsUpdateArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {hospitalsDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospitals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hospitalsDeleteManyArgs>(args?: SelectSubset<T, hospitalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospitals = await prisma.hospitals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hospitalsUpdateManyArgs>(args: SelectSubset<T, hospitalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {hospitalsUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospitals = await prisma.hospitals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `hospital_id`
     * const hospitalsWithHospital_idOnly = await prisma.hospitals.updateManyAndReturn({
     *   select: { hospital_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hospitalsUpdateManyAndReturnArgs>(args: SelectSubset<T, hospitalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospitals.
     * @param {hospitalsUpsertArgs} args - Arguments to update or create a Hospitals.
     * @example
     * // Update or create a Hospitals
     * const hospitals = await prisma.hospitals.upsert({
     *   create: {
     *     // ... data to create a Hospitals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospitals we want to update
     *   }
     * })
     */
    upsert<T extends hospitalsUpsertArgs>(args: SelectSubset<T, hospitalsUpsertArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospitals.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends hospitalsCountArgs>(
      args?: Subset<T, hospitalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalsAggregateArgs>(args: Subset<T, HospitalsAggregateArgs>): Prisma.PrismaPromise<GetHospitalsAggregateType<T>>

    /**
     * Group by Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hospitalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospitalsGroupByArgs['orderBy'] }
        : { orderBy?: hospitalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hospitalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hospitals model
   */
  readonly fields: hospitalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospitals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospitalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosis_types<T extends hospitals$diagnosis_typesArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$diagnosis_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctors<T extends hospitals$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends hospitals$patientsArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    treatment_types<T extends hospitals$treatment_typesArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$treatment_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hospitals model
   */
  interface hospitalsFieldRefs {
    readonly hospital_id: FieldRef<"hospitals", 'Int'>
    readonly hospital_name: FieldRef<"hospitals", 'String'>
    readonly default_payment_mode_id: FieldRef<"hospitals", 'Int'>
    readonly registration_charge: FieldRef<"hospitals", 'Decimal'>
    readonly registration_validity_months: FieldRef<"hospitals", 'Int'>
    readonly opening_date: FieldRef<"hospitals", 'DateTime'>
    readonly opening_patient_no: FieldRef<"hospitals", 'Int'>
    readonly opening_opd_no: FieldRef<"hospitals", 'Int'>
    readonly opening_receipt_no: FieldRef<"hospitals", 'Int'>
    readonly description: FieldRef<"hospitals", 'String'>
    readonly user_id: FieldRef<"hospitals", 'Int'>
    readonly created: FieldRef<"hospitals", 'DateTime'>
    readonly modified: FieldRef<"hospitals", 'DateTime'>
    readonly address: FieldRef<"hospitals", 'String'>
    readonly is_rate_enable_in_receipt: FieldRef<"hospitals", 'Boolean'>
    readonly is_registration_fee_enable_in_opd: FieldRef<"hospitals", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * hospitals findUnique
   */
  export type hospitalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals findUniqueOrThrow
   */
  export type hospitalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals findFirst
   */
  export type hospitalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals findFirstOrThrow
   */
  export type hospitalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals findMany
   */
  export type hospitalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals create
   */
  export type hospitalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The data needed to create a hospitals.
     */
    data: XOR<hospitalsCreateInput, hospitalsUncheckedCreateInput>
  }

  /**
   * hospitals createMany
   */
  export type hospitalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospitals.
     */
    data: hospitalsCreateManyInput | hospitalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hospitals createManyAndReturn
   */
  export type hospitalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * The data used to create many hospitals.
     */
    data: hospitalsCreateManyInput | hospitalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hospitals update
   */
  export type hospitalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The data needed to update a hospitals.
     */
    data: XOR<hospitalsUpdateInput, hospitalsUncheckedUpdateInput>
    /**
     * Choose, which hospitals to update.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals updateMany
   */
  export type hospitalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyInput>
    /**
     * Filter which hospitals to update
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to update.
     */
    limit?: number
  }

  /**
   * hospitals updateManyAndReturn
   */
  export type hospitalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyInput>
    /**
     * Filter which hospitals to update
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to update.
     */
    limit?: number
  }

  /**
   * hospitals upsert
   */
  export type hospitalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The filter to search for the hospitals to update in case it exists.
     */
    where: hospitalsWhereUniqueInput
    /**
     * In case the hospitals found by the `where` argument doesn't exist, create a new hospitals with this data.
     */
    create: XOR<hospitalsCreateInput, hospitalsUncheckedCreateInput>
    /**
     * In case the hospitals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospitalsUpdateInput, hospitalsUncheckedUpdateInput>
  }

  /**
   * hospitals delete
   */
  export type hospitalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter which hospitals to delete.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals deleteMany
   */
  export type hospitalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to delete
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to delete.
     */
    limit?: number
  }

  /**
   * hospitals.diagnosis_types
   */
  export type hospitals$diagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosis_types
     */
    select?: diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnosis_types
     */
    omit?: diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosis_typesInclude<ExtArgs> | null
    where?: diagnosis_typesWhereInput
    orderBy?: diagnosis_typesOrderByWithRelationInput | diagnosis_typesOrderByWithRelationInput[]
    cursor?: diagnosis_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Diagnosis_typesScalarFieldEnum | Diagnosis_typesScalarFieldEnum[]
  }

  /**
   * hospitals.doctors
   */
  export type hospitals$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    where?: doctorsWhereInput
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    cursor?: doctorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * hospitals.patients
   */
  export type hospitals$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    cursor?: patientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * hospitals.treatment_types
   */
  export type hospitals$treatment_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    where?: treatment_typesWhereInput
    orderBy?: treatment_typesOrderByWithRelationInput | treatment_typesOrderByWithRelationInput[]
    cursor?: treatment_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Treatment_typesScalarFieldEnum | Treatment_typesScalarFieldEnum[]
  }

  /**
   * hospitals without action
   */
  export type hospitalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
  }


  /**
   * Model opd
   */

  export type AggregateOpd = {
    _count: OpdCountAggregateOutputType | null
    _avg: OpdAvgAggregateOutputType | null
    _sum: OpdSumAggregateOutputType | null
    _min: OpdMinAggregateOutputType | null
    _max: OpdMaxAggregateOutputType | null
  }

  export type OpdAvgAggregateOutputType = {
    opd_id: number | null
    patient_id: number | null
    treated_by_doctor_id: number | null
    registration_fee: Decimal | null
    user_id: number | null
  }

  export type OpdSumAggregateOutputType = {
    opd_id: number | null
    patient_id: number | null
    treated_by_doctor_id: number | null
    registration_fee: Decimal | null
    user_id: number | null
  }

  export type OpdMinAggregateOutputType = {
    opd_id: number | null
    opd_no: string | null
    opd_datetime: Date | null
    patient_id: number | null
    is_follow_up_case: boolean | null
    treated_by_doctor_id: number | null
    registration_fee: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    old_opd_no: string | null
  }

  export type OpdMaxAggregateOutputType = {
    opd_id: number | null
    opd_no: string | null
    opd_datetime: Date | null
    patient_id: number | null
    is_follow_up_case: boolean | null
    treated_by_doctor_id: number | null
    registration_fee: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    old_opd_no: string | null
  }

  export type OpdCountAggregateOutputType = {
    opd_id: number
    opd_no: number
    opd_datetime: number
    patient_id: number
    is_follow_up_case: number
    treated_by_doctor_id: number
    registration_fee: number
    description: number
    user_id: number
    created: number
    modified: number
    old_opd_no: number
    _all: number
  }


  export type OpdAvgAggregateInputType = {
    opd_id?: true
    patient_id?: true
    treated_by_doctor_id?: true
    registration_fee?: true
    user_id?: true
  }

  export type OpdSumAggregateInputType = {
    opd_id?: true
    patient_id?: true
    treated_by_doctor_id?: true
    registration_fee?: true
    user_id?: true
  }

  export type OpdMinAggregateInputType = {
    opd_id?: true
    opd_no?: true
    opd_datetime?: true
    patient_id?: true
    is_follow_up_case?: true
    treated_by_doctor_id?: true
    registration_fee?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    old_opd_no?: true
  }

  export type OpdMaxAggregateInputType = {
    opd_id?: true
    opd_no?: true
    opd_datetime?: true
    patient_id?: true
    is_follow_up_case?: true
    treated_by_doctor_id?: true
    registration_fee?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    old_opd_no?: true
  }

  export type OpdCountAggregateInputType = {
    opd_id?: true
    opd_no?: true
    opd_datetime?: true
    patient_id?: true
    is_follow_up_case?: true
    treated_by_doctor_id?: true
    registration_fee?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    old_opd_no?: true
    _all?: true
  }

  export type OpdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opd to aggregate.
     */
    where?: opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opds to fetch.
     */
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned opds
    **/
    _count?: true | OpdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpdMaxAggregateInputType
  }

  export type GetOpdAggregateType<T extends OpdAggregateArgs> = {
        [P in keyof T & keyof AggregateOpd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpd[P]>
      : GetScalarType<T[P], AggregateOpd[P]>
  }




  export type opdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opdWhereInput
    orderBy?: opdOrderByWithAggregationInput | opdOrderByWithAggregationInput[]
    by: OpdScalarFieldEnum[] | OpdScalarFieldEnum
    having?: opdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpdCountAggregateInputType | true
    _avg?: OpdAvgAggregateInputType
    _sum?: OpdSumAggregateInputType
    _min?: OpdMinAggregateInputType
    _max?: OpdMaxAggregateInputType
  }

  export type OpdGroupByOutputType = {
    opd_id: number
    opd_no: string | null
    opd_datetime: Date
    patient_id: number
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal
    description: string | null
    user_id: number
    created: Date
    modified: Date
    old_opd_no: string | null
    _count: OpdCountAggregateOutputType | null
    _avg: OpdAvgAggregateOutputType | null
    _sum: OpdSumAggregateOutputType | null
    _min: OpdMinAggregateOutputType | null
    _max: OpdMaxAggregateOutputType | null
  }

  type GetOpdGroupByPayload<T extends opdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpdGroupByOutputType[P]>
            : GetScalarType<T[P], OpdGroupByOutputType[P]>
        }
      >
    >


  export type opdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_id?: boolean
    opd_no?: boolean
    opd_datetime?: boolean
    patient_id?: boolean
    is_follow_up_case?: boolean
    treated_by_doctor_id?: boolean
    registration_fee?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    old_opd_no?: boolean
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    opd_diagnosis_types?: boolean | opd$opd_diagnosis_typesArgs<ExtArgs>
    receipts?: boolean | opd$receiptsArgs<ExtArgs>
    _count?: boolean | OpdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type opdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_id?: boolean
    opd_no?: boolean
    opd_datetime?: boolean
    patient_id?: boolean
    is_follow_up_case?: boolean
    treated_by_doctor_id?: boolean
    registration_fee?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    old_opd_no?: boolean
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type opdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_id?: boolean
    opd_no?: boolean
    opd_datetime?: boolean
    patient_id?: boolean
    is_follow_up_case?: boolean
    treated_by_doctor_id?: boolean
    registration_fee?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    old_opd_no?: boolean
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type opdSelectScalar = {
    opd_id?: boolean
    opd_no?: boolean
    opd_datetime?: boolean
    patient_id?: boolean
    is_follow_up_case?: boolean
    treated_by_doctor_id?: boolean
    registration_fee?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    old_opd_no?: boolean
  }

  export type opdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"opd_id" | "opd_no" | "opd_datetime" | "patient_id" | "is_follow_up_case" | "treated_by_doctor_id" | "registration_fee" | "description" | "user_id" | "created" | "modified" | "old_opd_no", ExtArgs["result"]["opd"]>
  export type opdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
    opd_diagnosis_types?: boolean | opd$opd_diagnosis_typesArgs<ExtArgs>
    receipts?: boolean | opd$receiptsArgs<ExtArgs>
    _count?: boolean | OpdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type opdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
  }
  export type opdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    patients?: boolean | patientsDefaultArgs<ExtArgs>
  }

  export type $opdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "opd"
    objects: {
      doctors: Prisma.$doctorsPayload<ExtArgs>
      patients: Prisma.$patientsPayload<ExtArgs>
      opd_diagnosis_types: Prisma.$opd_diagnosis_typesPayload<ExtArgs>[]
      receipts: Prisma.$receiptsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      opd_id: number
      opd_no: string | null
      opd_datetime: Date
      patient_id: number
      is_follow_up_case: boolean
      treated_by_doctor_id: number
      registration_fee: Prisma.Decimal
      description: string | null
      user_id: number
      created: Date
      modified: Date
      old_opd_no: string | null
    }, ExtArgs["result"]["opd"]>
    composites: {}
  }

  type opdGetPayload<S extends boolean | null | undefined | opdDefaultArgs> = $Result.GetResult<Prisma.$opdPayload, S>

  type opdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<opdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpdCountAggregateInputType | true
    }

  export interface opdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['opd'], meta: { name: 'opd' } }
    /**
     * Find zero or one Opd that matches the filter.
     * @param {opdFindUniqueArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends opdFindUniqueArgs>(args: SelectSubset<T, opdFindUniqueArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {opdFindUniqueOrThrowArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends opdFindUniqueOrThrowArgs>(args: SelectSubset<T, opdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdFindFirstArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends opdFindFirstArgs>(args?: SelectSubset<T, opdFindFirstArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdFindFirstOrThrowArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends opdFindFirstOrThrowArgs>(args?: SelectSubset<T, opdFindFirstOrThrowArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opds
     * const opds = await prisma.opd.findMany()
     * 
     * // Get first 10 Opds
     * const opds = await prisma.opd.findMany({ take: 10 })
     * 
     * // Only select the `opd_id`
     * const opdWithOpd_idOnly = await prisma.opd.findMany({ select: { opd_id: true } })
     * 
     */
    findMany<T extends opdFindManyArgs>(args?: SelectSubset<T, opdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opd.
     * @param {opdCreateArgs} args - Arguments to create a Opd.
     * @example
     * // Create one Opd
     * const Opd = await prisma.opd.create({
     *   data: {
     *     // ... data to create a Opd
     *   }
     * })
     * 
     */
    create<T extends opdCreateArgs>(args: SelectSubset<T, opdCreateArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opds.
     * @param {opdCreateManyArgs} args - Arguments to create many Opds.
     * @example
     * // Create many Opds
     * const opd = await prisma.opd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends opdCreateManyArgs>(args?: SelectSubset<T, opdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opds and returns the data saved in the database.
     * @param {opdCreateManyAndReturnArgs} args - Arguments to create many Opds.
     * @example
     * // Create many Opds
     * const opd = await prisma.opd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opds and only return the `opd_id`
     * const opdWithOpd_idOnly = await prisma.opd.createManyAndReturn({
     *   select: { opd_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends opdCreateManyAndReturnArgs>(args?: SelectSubset<T, opdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opd.
     * @param {opdDeleteArgs} args - Arguments to delete one Opd.
     * @example
     * // Delete one Opd
     * const Opd = await prisma.opd.delete({
     *   where: {
     *     // ... filter to delete one Opd
     *   }
     * })
     * 
     */
    delete<T extends opdDeleteArgs>(args: SelectSubset<T, opdDeleteArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opd.
     * @param {opdUpdateArgs} args - Arguments to update one Opd.
     * @example
     * // Update one Opd
     * const opd = await prisma.opd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends opdUpdateArgs>(args: SelectSubset<T, opdUpdateArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opds.
     * @param {opdDeleteManyArgs} args - Arguments to filter Opds to delete.
     * @example
     * // Delete a few Opds
     * const { count } = await prisma.opd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends opdDeleteManyArgs>(args?: SelectSubset<T, opdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opds
     * const opd = await prisma.opd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends opdUpdateManyArgs>(args: SelectSubset<T, opdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opds and returns the data updated in the database.
     * @param {opdUpdateManyAndReturnArgs} args - Arguments to update many Opds.
     * @example
     * // Update many Opds
     * const opd = await prisma.opd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opds and only return the `opd_id`
     * const opdWithOpd_idOnly = await prisma.opd.updateManyAndReturn({
     *   select: { opd_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends opdUpdateManyAndReturnArgs>(args: SelectSubset<T, opdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opd.
     * @param {opdUpsertArgs} args - Arguments to update or create a Opd.
     * @example
     * // Update or create a Opd
     * const opd = await prisma.opd.upsert({
     *   create: {
     *     // ... data to create a Opd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opd we want to update
     *   }
     * })
     */
    upsert<T extends opdUpsertArgs>(args: SelectSubset<T, opdUpsertArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdCountArgs} args - Arguments to filter Opds to count.
     * @example
     * // Count the number of Opds
     * const count = await prisma.opd.count({
     *   where: {
     *     // ... the filter for the Opds we want to count
     *   }
     * })
    **/
    count<T extends opdCountArgs>(
      args?: Subset<T, opdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpdAggregateArgs>(args: Subset<T, OpdAggregateArgs>): Prisma.PrismaPromise<GetOpdAggregateType<T>>

    /**
     * Group by Opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends opdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: opdGroupByArgs['orderBy'] }
        : { orderBy?: opdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, opdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the opd model
   */
  readonly fields: opdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for opd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__opdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends doctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorsDefaultArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patients<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opd_diagnosis_types<T extends opd$opd_diagnosis_typesArgs<ExtArgs> = {}>(args?: Subset<T, opd$opd_diagnosis_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receipts<T extends opd$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, opd$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the opd model
   */
  interface opdFieldRefs {
    readonly opd_id: FieldRef<"opd", 'Int'>
    readonly opd_no: FieldRef<"opd", 'String'>
    readonly opd_datetime: FieldRef<"opd", 'DateTime'>
    readonly patient_id: FieldRef<"opd", 'Int'>
    readonly is_follow_up_case: FieldRef<"opd", 'Boolean'>
    readonly treated_by_doctor_id: FieldRef<"opd", 'Int'>
    readonly registration_fee: FieldRef<"opd", 'Decimal'>
    readonly description: FieldRef<"opd", 'String'>
    readonly user_id: FieldRef<"opd", 'Int'>
    readonly created: FieldRef<"opd", 'DateTime'>
    readonly modified: FieldRef<"opd", 'DateTime'>
    readonly old_opd_no: FieldRef<"opd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * opd findUnique
   */
  export type opdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter, which opd to fetch.
     */
    where: opdWhereUniqueInput
  }

  /**
   * opd findUniqueOrThrow
   */
  export type opdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter, which opd to fetch.
     */
    where: opdWhereUniqueInput
  }

  /**
   * opd findFirst
   */
  export type opdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter, which opd to fetch.
     */
    where?: opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opds to fetch.
     */
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opds.
     */
    cursor?: opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opds.
     */
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * opd findFirstOrThrow
   */
  export type opdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter, which opd to fetch.
     */
    where?: opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opds to fetch.
     */
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opds.
     */
    cursor?: opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opds.
     */
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * opd findMany
   */
  export type opdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter, which opds to fetch.
     */
    where?: opdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opds to fetch.
     */
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing opds.
     */
    cursor?: opdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opds.
     */
    skip?: number
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * opd create
   */
  export type opdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * The data needed to create a opd.
     */
    data: XOR<opdCreateInput, opdUncheckedCreateInput>
  }

  /**
   * opd createMany
   */
  export type opdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many opds.
     */
    data: opdCreateManyInput | opdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * opd createManyAndReturn
   */
  export type opdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * The data used to create many opds.
     */
    data: opdCreateManyInput | opdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * opd update
   */
  export type opdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * The data needed to update a opd.
     */
    data: XOR<opdUpdateInput, opdUncheckedUpdateInput>
    /**
     * Choose, which opd to update.
     */
    where: opdWhereUniqueInput
  }

  /**
   * opd updateMany
   */
  export type opdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update opds.
     */
    data: XOR<opdUpdateManyMutationInput, opdUncheckedUpdateManyInput>
    /**
     * Filter which opds to update
     */
    where?: opdWhereInput
    /**
     * Limit how many opds to update.
     */
    limit?: number
  }

  /**
   * opd updateManyAndReturn
   */
  export type opdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * The data used to update opds.
     */
    data: XOR<opdUpdateManyMutationInput, opdUncheckedUpdateManyInput>
    /**
     * Filter which opds to update
     */
    where?: opdWhereInput
    /**
     * Limit how many opds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * opd upsert
   */
  export type opdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * The filter to search for the opd to update in case it exists.
     */
    where: opdWhereUniqueInput
    /**
     * In case the opd found by the `where` argument doesn't exist, create a new opd with this data.
     */
    create: XOR<opdCreateInput, opdUncheckedCreateInput>
    /**
     * In case the opd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<opdUpdateInput, opdUncheckedUpdateInput>
  }

  /**
   * opd delete
   */
  export type opdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    /**
     * Filter which opd to delete.
     */
    where: opdWhereUniqueInput
  }

  /**
   * opd deleteMany
   */
  export type opdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opds to delete
     */
    where?: opdWhereInput
    /**
     * Limit how many opds to delete.
     */
    limit?: number
  }

  /**
   * opd.opd_diagnosis_types
   */
  export type opd$opd_diagnosis_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    where?: opd_diagnosis_typesWhereInput
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    cursor?: opd_diagnosis_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Opd_diagnosis_typesScalarFieldEnum | Opd_diagnosis_typesScalarFieldEnum[]
  }

  /**
   * opd.receipts
   */
  export type opd$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    where?: receiptsWhereInput
    orderBy?: receiptsOrderByWithRelationInput | receiptsOrderByWithRelationInput[]
    cursor?: receiptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptsScalarFieldEnum | ReceiptsScalarFieldEnum[]
  }

  /**
   * opd without action
   */
  export type opdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
  }


  /**
   * Model opd_diagnosis_types
   */

  export type AggregateOpd_diagnosis_types = {
    _count: Opd_diagnosis_typesCountAggregateOutputType | null
    _avg: Opd_diagnosis_typesAvgAggregateOutputType | null
    _sum: Opd_diagnosis_typesSumAggregateOutputType | null
    _min: Opd_diagnosis_typesMinAggregateOutputType | null
    _max: Opd_diagnosis_typesMaxAggregateOutputType | null
  }

  export type Opd_diagnosis_typesAvgAggregateOutputType = {
    opd_diagnosis_type_id: number | null
    opd_id: number | null
    diagnosis_type_id: number | null
    user_id: number | null
  }

  export type Opd_diagnosis_typesSumAggregateOutputType = {
    opd_diagnosis_type_id: number | null
    opd_id: number | null
    diagnosis_type_id: number | null
    user_id: number | null
  }

  export type Opd_diagnosis_typesMinAggregateOutputType = {
    opd_diagnosis_type_id: number | null
    opd_id: number | null
    diagnosis_type_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Opd_diagnosis_typesMaxAggregateOutputType = {
    opd_diagnosis_type_id: number | null
    opd_id: number | null
    diagnosis_type_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Opd_diagnosis_typesCountAggregateOutputType = {
    opd_diagnosis_type_id: number
    opd_id: number
    diagnosis_type_id: number
    description: number
    user_id: number
    created: number
    modified: number
    _all: number
  }


  export type Opd_diagnosis_typesAvgAggregateInputType = {
    opd_diagnosis_type_id?: true
    opd_id?: true
    diagnosis_type_id?: true
    user_id?: true
  }

  export type Opd_diagnosis_typesSumAggregateInputType = {
    opd_diagnosis_type_id?: true
    opd_id?: true
    diagnosis_type_id?: true
    user_id?: true
  }

  export type Opd_diagnosis_typesMinAggregateInputType = {
    opd_diagnosis_type_id?: true
    opd_id?: true
    diagnosis_type_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Opd_diagnosis_typesMaxAggregateInputType = {
    opd_diagnosis_type_id?: true
    opd_id?: true
    diagnosis_type_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Opd_diagnosis_typesCountAggregateInputType = {
    opd_diagnosis_type_id?: true
    opd_id?: true
    diagnosis_type_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type Opd_diagnosis_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opd_diagnosis_types to aggregate.
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opd_diagnosis_types to fetch.
     */
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: opd_diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opd_diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opd_diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned opd_diagnosis_types
    **/
    _count?: true | Opd_diagnosis_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Opd_diagnosis_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Opd_diagnosis_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Opd_diagnosis_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Opd_diagnosis_typesMaxAggregateInputType
  }

  export type GetOpd_diagnosis_typesAggregateType<T extends Opd_diagnosis_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateOpd_diagnosis_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpd_diagnosis_types[P]>
      : GetScalarType<T[P], AggregateOpd_diagnosis_types[P]>
  }




  export type opd_diagnosis_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opd_diagnosis_typesWhereInput
    orderBy?: opd_diagnosis_typesOrderByWithAggregationInput | opd_diagnosis_typesOrderByWithAggregationInput[]
    by: Opd_diagnosis_typesScalarFieldEnum[] | Opd_diagnosis_typesScalarFieldEnum
    having?: opd_diagnosis_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Opd_diagnosis_typesCountAggregateInputType | true
    _avg?: Opd_diagnosis_typesAvgAggregateInputType
    _sum?: Opd_diagnosis_typesSumAggregateInputType
    _min?: Opd_diagnosis_typesMinAggregateInputType
    _max?: Opd_diagnosis_typesMaxAggregateInputType
  }

  export type Opd_diagnosis_typesGroupByOutputType = {
    opd_diagnosis_type_id: number
    opd_id: number
    diagnosis_type_id: number
    description: string | null
    user_id: number
    created: Date
    modified: Date
    _count: Opd_diagnosis_typesCountAggregateOutputType | null
    _avg: Opd_diagnosis_typesAvgAggregateOutputType | null
    _sum: Opd_diagnosis_typesSumAggregateOutputType | null
    _min: Opd_diagnosis_typesMinAggregateOutputType | null
    _max: Opd_diagnosis_typesMaxAggregateOutputType | null
  }

  type GetOpd_diagnosis_typesGroupByPayload<T extends opd_diagnosis_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Opd_diagnosis_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Opd_diagnosis_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Opd_diagnosis_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Opd_diagnosis_typesGroupByOutputType[P]>
        }
      >
    >


  export type opd_diagnosis_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_diagnosis_type_id?: boolean
    opd_id?: boolean
    diagnosis_type_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd_diagnosis_types"]>

  export type opd_diagnosis_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_diagnosis_type_id?: boolean
    opd_id?: boolean
    diagnosis_type_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd_diagnosis_types"]>

  export type opd_diagnosis_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    opd_diagnosis_type_id?: boolean
    opd_id?: boolean
    diagnosis_type_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd_diagnosis_types"]>

  export type opd_diagnosis_typesSelectScalar = {
    opd_diagnosis_type_id?: boolean
    opd_id?: boolean
    diagnosis_type_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
  }

  export type opd_diagnosis_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"opd_diagnosis_type_id" | "opd_id" | "diagnosis_type_id" | "description" | "user_id" | "created" | "modified", ExtArgs["result"]["opd_diagnosis_types"]>
  export type opd_diagnosis_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }
  export type opd_diagnosis_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }
  export type opd_diagnosis_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis_types?: boolean | diagnosis_typesDefaultArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }

  export type $opd_diagnosis_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "opd_diagnosis_types"
    objects: {
      diagnosis_types: Prisma.$diagnosis_typesPayload<ExtArgs>
      opd: Prisma.$opdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      opd_diagnosis_type_id: number
      opd_id: number
      diagnosis_type_id: number
      description: string | null
      user_id: number
      created: Date
      modified: Date
    }, ExtArgs["result"]["opd_diagnosis_types"]>
    composites: {}
  }

  type opd_diagnosis_typesGetPayload<S extends boolean | null | undefined | opd_diagnosis_typesDefaultArgs> = $Result.GetResult<Prisma.$opd_diagnosis_typesPayload, S>

  type opd_diagnosis_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<opd_diagnosis_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Opd_diagnosis_typesCountAggregateInputType | true
    }

  export interface opd_diagnosis_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['opd_diagnosis_types'], meta: { name: 'opd_diagnosis_types' } }
    /**
     * Find zero or one Opd_diagnosis_types that matches the filter.
     * @param {opd_diagnosis_typesFindUniqueArgs} args - Arguments to find a Opd_diagnosis_types
     * @example
     * // Get one Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends opd_diagnosis_typesFindUniqueArgs>(args: SelectSubset<T, opd_diagnosis_typesFindUniqueArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opd_diagnosis_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {opd_diagnosis_typesFindUniqueOrThrowArgs} args - Arguments to find a Opd_diagnosis_types
     * @example
     * // Get one Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends opd_diagnosis_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, opd_diagnosis_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd_diagnosis_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesFindFirstArgs} args - Arguments to find a Opd_diagnosis_types
     * @example
     * // Get one Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends opd_diagnosis_typesFindFirstArgs>(args?: SelectSubset<T, opd_diagnosis_typesFindFirstArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd_diagnosis_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesFindFirstOrThrowArgs} args - Arguments to find a Opd_diagnosis_types
     * @example
     * // Get one Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends opd_diagnosis_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, opd_diagnosis_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opd_diagnosis_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findMany()
     * 
     * // Get first 10 Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.findMany({ take: 10 })
     * 
     * // Only select the `opd_diagnosis_type_id`
     * const opd_diagnosis_typesWithOpd_diagnosis_type_idOnly = await prisma.opd_diagnosis_types.findMany({ select: { opd_diagnosis_type_id: true } })
     * 
     */
    findMany<T extends opd_diagnosis_typesFindManyArgs>(args?: SelectSubset<T, opd_diagnosis_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opd_diagnosis_types.
     * @param {opd_diagnosis_typesCreateArgs} args - Arguments to create a Opd_diagnosis_types.
     * @example
     * // Create one Opd_diagnosis_types
     * const Opd_diagnosis_types = await prisma.opd_diagnosis_types.create({
     *   data: {
     *     // ... data to create a Opd_diagnosis_types
     *   }
     * })
     * 
     */
    create<T extends opd_diagnosis_typesCreateArgs>(args: SelectSubset<T, opd_diagnosis_typesCreateArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opd_diagnosis_types.
     * @param {opd_diagnosis_typesCreateManyArgs} args - Arguments to create many Opd_diagnosis_types.
     * @example
     * // Create many Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends opd_diagnosis_typesCreateManyArgs>(args?: SelectSubset<T, opd_diagnosis_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opd_diagnosis_types and returns the data saved in the database.
     * @param {opd_diagnosis_typesCreateManyAndReturnArgs} args - Arguments to create many Opd_diagnosis_types.
     * @example
     * // Create many Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opd_diagnosis_types and only return the `opd_diagnosis_type_id`
     * const opd_diagnosis_typesWithOpd_diagnosis_type_idOnly = await prisma.opd_diagnosis_types.createManyAndReturn({
     *   select: { opd_diagnosis_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends opd_diagnosis_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, opd_diagnosis_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opd_diagnosis_types.
     * @param {opd_diagnosis_typesDeleteArgs} args - Arguments to delete one Opd_diagnosis_types.
     * @example
     * // Delete one Opd_diagnosis_types
     * const Opd_diagnosis_types = await prisma.opd_diagnosis_types.delete({
     *   where: {
     *     // ... filter to delete one Opd_diagnosis_types
     *   }
     * })
     * 
     */
    delete<T extends opd_diagnosis_typesDeleteArgs>(args: SelectSubset<T, opd_diagnosis_typesDeleteArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opd_diagnosis_types.
     * @param {opd_diagnosis_typesUpdateArgs} args - Arguments to update one Opd_diagnosis_types.
     * @example
     * // Update one Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends opd_diagnosis_typesUpdateArgs>(args: SelectSubset<T, opd_diagnosis_typesUpdateArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opd_diagnosis_types.
     * @param {opd_diagnosis_typesDeleteManyArgs} args - Arguments to filter Opd_diagnosis_types to delete.
     * @example
     * // Delete a few Opd_diagnosis_types
     * const { count } = await prisma.opd_diagnosis_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends opd_diagnosis_typesDeleteManyArgs>(args?: SelectSubset<T, opd_diagnosis_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opd_diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends opd_diagnosis_typesUpdateManyArgs>(args: SelectSubset<T, opd_diagnosis_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opd_diagnosis_types and returns the data updated in the database.
     * @param {opd_diagnosis_typesUpdateManyAndReturnArgs} args - Arguments to update many Opd_diagnosis_types.
     * @example
     * // Update many Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opd_diagnosis_types and only return the `opd_diagnosis_type_id`
     * const opd_diagnosis_typesWithOpd_diagnosis_type_idOnly = await prisma.opd_diagnosis_types.updateManyAndReturn({
     *   select: { opd_diagnosis_type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends opd_diagnosis_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, opd_diagnosis_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opd_diagnosis_types.
     * @param {opd_diagnosis_typesUpsertArgs} args - Arguments to update or create a Opd_diagnosis_types.
     * @example
     * // Update or create a Opd_diagnosis_types
     * const opd_diagnosis_types = await prisma.opd_diagnosis_types.upsert({
     *   create: {
     *     // ... data to create a Opd_diagnosis_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opd_diagnosis_types we want to update
     *   }
     * })
     */
    upsert<T extends opd_diagnosis_typesUpsertArgs>(args: SelectSubset<T, opd_diagnosis_typesUpsertArgs<ExtArgs>>): Prisma__opd_diagnosis_typesClient<$Result.GetResult<Prisma.$opd_diagnosis_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opd_diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesCountArgs} args - Arguments to filter Opd_diagnosis_types to count.
     * @example
     * // Count the number of Opd_diagnosis_types
     * const count = await prisma.opd_diagnosis_types.count({
     *   where: {
     *     // ... the filter for the Opd_diagnosis_types we want to count
     *   }
     * })
    **/
    count<T extends opd_diagnosis_typesCountArgs>(
      args?: Subset<T, opd_diagnosis_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Opd_diagnosis_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opd_diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Opd_diagnosis_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Opd_diagnosis_typesAggregateArgs>(args: Subset<T, Opd_diagnosis_typesAggregateArgs>): Prisma.PrismaPromise<GetOpd_diagnosis_typesAggregateType<T>>

    /**
     * Group by Opd_diagnosis_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opd_diagnosis_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends opd_diagnosis_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: opd_diagnosis_typesGroupByArgs['orderBy'] }
        : { orderBy?: opd_diagnosis_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, opd_diagnosis_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpd_diagnosis_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the opd_diagnosis_types model
   */
  readonly fields: opd_diagnosis_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for opd_diagnosis_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__opd_diagnosis_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosis_types<T extends diagnosis_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, diagnosis_typesDefaultArgs<ExtArgs>>): Prisma__diagnosis_typesClient<$Result.GetResult<Prisma.$diagnosis_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opd<T extends opdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, opdDefaultArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the opd_diagnosis_types model
   */
  interface opd_diagnosis_typesFieldRefs {
    readonly opd_diagnosis_type_id: FieldRef<"opd_diagnosis_types", 'Int'>
    readonly opd_id: FieldRef<"opd_diagnosis_types", 'Int'>
    readonly diagnosis_type_id: FieldRef<"opd_diagnosis_types", 'Int'>
    readonly description: FieldRef<"opd_diagnosis_types", 'String'>
    readonly user_id: FieldRef<"opd_diagnosis_types", 'Int'>
    readonly created: FieldRef<"opd_diagnosis_types", 'DateTime'>
    readonly modified: FieldRef<"opd_diagnosis_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * opd_diagnosis_types findUnique
   */
  export type opd_diagnosis_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which opd_diagnosis_types to fetch.
     */
    where: opd_diagnosis_typesWhereUniqueInput
  }

  /**
   * opd_diagnosis_types findUniqueOrThrow
   */
  export type opd_diagnosis_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which opd_diagnosis_types to fetch.
     */
    where: opd_diagnosis_typesWhereUniqueInput
  }

  /**
   * opd_diagnosis_types findFirst
   */
  export type opd_diagnosis_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which opd_diagnosis_types to fetch.
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opd_diagnosis_types to fetch.
     */
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opd_diagnosis_types.
     */
    cursor?: opd_diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opd_diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opd_diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opd_diagnosis_types.
     */
    distinct?: Opd_diagnosis_typesScalarFieldEnum | Opd_diagnosis_typesScalarFieldEnum[]
  }

  /**
   * opd_diagnosis_types findFirstOrThrow
   */
  export type opd_diagnosis_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which opd_diagnosis_types to fetch.
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opd_diagnosis_types to fetch.
     */
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opd_diagnosis_types.
     */
    cursor?: opd_diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opd_diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opd_diagnosis_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opd_diagnosis_types.
     */
    distinct?: Opd_diagnosis_typesScalarFieldEnum | Opd_diagnosis_typesScalarFieldEnum[]
  }

  /**
   * opd_diagnosis_types findMany
   */
  export type opd_diagnosis_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter, which opd_diagnosis_types to fetch.
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opd_diagnosis_types to fetch.
     */
    orderBy?: opd_diagnosis_typesOrderByWithRelationInput | opd_diagnosis_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing opd_diagnosis_types.
     */
    cursor?: opd_diagnosis_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opd_diagnosis_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opd_diagnosis_types.
     */
    skip?: number
    distinct?: Opd_diagnosis_typesScalarFieldEnum | Opd_diagnosis_typesScalarFieldEnum[]
  }

  /**
   * opd_diagnosis_types create
   */
  export type opd_diagnosis_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a opd_diagnosis_types.
     */
    data: XOR<opd_diagnosis_typesCreateInput, opd_diagnosis_typesUncheckedCreateInput>
  }

  /**
   * opd_diagnosis_types createMany
   */
  export type opd_diagnosis_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many opd_diagnosis_types.
     */
    data: opd_diagnosis_typesCreateManyInput | opd_diagnosis_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * opd_diagnosis_types createManyAndReturn
   */
  export type opd_diagnosis_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * The data used to create many opd_diagnosis_types.
     */
    data: opd_diagnosis_typesCreateManyInput | opd_diagnosis_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * opd_diagnosis_types update
   */
  export type opd_diagnosis_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a opd_diagnosis_types.
     */
    data: XOR<opd_diagnosis_typesUpdateInput, opd_diagnosis_typesUncheckedUpdateInput>
    /**
     * Choose, which opd_diagnosis_types to update.
     */
    where: opd_diagnosis_typesWhereUniqueInput
  }

  /**
   * opd_diagnosis_types updateMany
   */
  export type opd_diagnosis_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update opd_diagnosis_types.
     */
    data: XOR<opd_diagnosis_typesUpdateManyMutationInput, opd_diagnosis_typesUncheckedUpdateManyInput>
    /**
     * Filter which opd_diagnosis_types to update
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * Limit how many opd_diagnosis_types to update.
     */
    limit?: number
  }

  /**
   * opd_diagnosis_types updateManyAndReturn
   */
  export type opd_diagnosis_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * The data used to update opd_diagnosis_types.
     */
    data: XOR<opd_diagnosis_typesUpdateManyMutationInput, opd_diagnosis_typesUncheckedUpdateManyInput>
    /**
     * Filter which opd_diagnosis_types to update
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * Limit how many opd_diagnosis_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * opd_diagnosis_types upsert
   */
  export type opd_diagnosis_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the opd_diagnosis_types to update in case it exists.
     */
    where: opd_diagnosis_typesWhereUniqueInput
    /**
     * In case the opd_diagnosis_types found by the `where` argument doesn't exist, create a new opd_diagnosis_types with this data.
     */
    create: XOR<opd_diagnosis_typesCreateInput, opd_diagnosis_typesUncheckedCreateInput>
    /**
     * In case the opd_diagnosis_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<opd_diagnosis_typesUpdateInput, opd_diagnosis_typesUncheckedUpdateInput>
  }

  /**
   * opd_diagnosis_types delete
   */
  export type opd_diagnosis_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
    /**
     * Filter which opd_diagnosis_types to delete.
     */
    where: opd_diagnosis_typesWhereUniqueInput
  }

  /**
   * opd_diagnosis_types deleteMany
   */
  export type opd_diagnosis_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opd_diagnosis_types to delete
     */
    where?: opd_diagnosis_typesWhereInput
    /**
     * Limit how many opd_diagnosis_types to delete.
     */
    limit?: number
  }

  /**
   * opd_diagnosis_types without action
   */
  export type opd_diagnosis_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd_diagnosis_types
     */
    select?: opd_diagnosis_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd_diagnosis_types
     */
    omit?: opd_diagnosis_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opd_diagnosis_typesInclude<ExtArgs> | null
  }


  /**
   * Model patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    patient_id: number | null
    patient_no: number | null
    age: number | null
    hospital_id: number | null
    state_id: number | null
    city_id: number | null
    user_id: number | null
  }

  export type PatientsSumAggregateOutputType = {
    patient_id: number | null
    patient_no: number | null
    age: number | null
    hospital_id: number | null
    state_id: number | null
    city_id: number | null
    user_id: number | null
  }

  export type PatientsMinAggregateOutputType = {
    patient_id: number | null
    patient_name: string | null
    patient_no: number | null
    registration_datetime: Date | null
    age: number | null
    blood_group: string | null
    gender: string | null
    occupation: string | null
    address: string | null
    hospital_id: number | null
    state_id: number | null
    city_id: number | null
    pin_code: string | null
    mobile_no: string | null
    referred_by: string | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    emergency_contact_no: string | null
  }

  export type PatientsMaxAggregateOutputType = {
    patient_id: number | null
    patient_name: string | null
    patient_no: number | null
    registration_datetime: Date | null
    age: number | null
    blood_group: string | null
    gender: string | null
    occupation: string | null
    address: string | null
    hospital_id: number | null
    state_id: number | null
    city_id: number | null
    pin_code: string | null
    mobile_no: string | null
    referred_by: string | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    emergency_contact_no: string | null
  }

  export type PatientsCountAggregateOutputType = {
    patient_id: number
    patient_name: number
    patient_no: number
    registration_datetime: number
    age: number
    blood_group: number
    gender: number
    occupation: number
    address: number
    hospital_id: number
    state_id: number
    city_id: number
    pin_code: number
    mobile_no: number
    referred_by: number
    description: number
    user_id: number
    created: number
    modified: number
    emergency_contact_no: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    patient_id?: true
    patient_no?: true
    age?: true
    hospital_id?: true
    state_id?: true
    city_id?: true
    user_id?: true
  }

  export type PatientsSumAggregateInputType = {
    patient_id?: true
    patient_no?: true
    age?: true
    hospital_id?: true
    state_id?: true
    city_id?: true
    user_id?: true
  }

  export type PatientsMinAggregateInputType = {
    patient_id?: true
    patient_name?: true
    patient_no?: true
    registration_datetime?: true
    age?: true
    blood_group?: true
    gender?: true
    occupation?: true
    address?: true
    hospital_id?: true
    state_id?: true
    city_id?: true
    pin_code?: true
    mobile_no?: true
    referred_by?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    emergency_contact_no?: true
  }

  export type PatientsMaxAggregateInputType = {
    patient_id?: true
    patient_name?: true
    patient_no?: true
    registration_datetime?: true
    age?: true
    blood_group?: true
    gender?: true
    occupation?: true
    address?: true
    hospital_id?: true
    state_id?: true
    city_id?: true
    pin_code?: true
    mobile_no?: true
    referred_by?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    emergency_contact_no?: true
  }

  export type PatientsCountAggregateInputType = {
    patient_id?: true
    patient_name?: true
    patient_no?: true
    registration_datetime?: true
    age?: true
    blood_group?: true
    gender?: true
    occupation?: true
    address?: true
    hospital_id?: true
    state_id?: true
    city_id?: true
    pin_code?: true
    mobile_no?: true
    referred_by?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    emergency_contact_no?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to aggregate.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type patientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithAggregationInput | patientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: patientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date
    age: number | null
    blood_group: string | null
    gender: string
    occupation: string | null
    address: string | null
    hospital_id: number
    state_id: number | null
    city_id: number | null
    pin_code: string | null
    mobile_no: string
    referred_by: string | null
    description: string | null
    user_id: number
    created: Date
    modified: Date
    emergency_contact_no: string | null
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type patientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    patient_name?: boolean
    patient_no?: boolean
    registration_datetime?: boolean
    age?: boolean
    blood_group?: boolean
    gender?: boolean
    occupation?: boolean
    address?: boolean
    hospital_id?: boolean
    state_id?: boolean
    city_id?: boolean
    pin_code?: boolean
    mobile_no?: boolean
    referred_by?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    emergency_contact_no?: boolean
    opd?: boolean | patients$opdArgs<ExtArgs>
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    patient_name?: boolean
    patient_no?: boolean
    registration_datetime?: boolean
    age?: boolean
    blood_group?: boolean
    gender?: boolean
    occupation?: boolean
    address?: boolean
    hospital_id?: boolean
    state_id?: boolean
    city_id?: boolean
    pin_code?: boolean
    mobile_no?: boolean
    referred_by?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    emergency_contact_no?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    patient_name?: boolean
    patient_no?: boolean
    registration_datetime?: boolean
    age?: boolean
    blood_group?: boolean
    gender?: boolean
    occupation?: boolean
    address?: boolean
    hospital_id?: boolean
    state_id?: boolean
    city_id?: boolean
    pin_code?: boolean
    mobile_no?: boolean
    referred_by?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    emergency_contact_no?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectScalar = {
    patient_id?: boolean
    patient_name?: boolean
    patient_no?: boolean
    registration_datetime?: boolean
    age?: boolean
    blood_group?: boolean
    gender?: boolean
    occupation?: boolean
    address?: boolean
    hospital_id?: boolean
    state_id?: boolean
    city_id?: boolean
    pin_code?: boolean
    mobile_no?: boolean
    referred_by?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    emergency_contact_no?: boolean
  }

  export type patientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patient_id" | "patient_name" | "patient_no" | "registration_datetime" | "age" | "blood_group" | "gender" | "occupation" | "address" | "hospital_id" | "state_id" | "city_id" | "pin_code" | "mobile_no" | "referred_by" | "description" | "user_id" | "created" | "modified" | "emergency_contact_no", ExtArgs["result"]["patients"]>
  export type patientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | patients$opdArgs<ExtArgs>
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }
  export type patientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }

  export type $patientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patients"
    objects: {
      opd: Prisma.$opdPayload<ExtArgs>[]
      hospitals: Prisma.$hospitalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      patient_id: number
      patient_name: string
      patient_no: number
      registration_datetime: Date
      age: number | null
      blood_group: string | null
      gender: string
      occupation: string | null
      address: string | null
      hospital_id: number
      state_id: number | null
      city_id: number | null
      pin_code: string | null
      mobile_no: string
      referred_by: string | null
      description: string | null
      user_id: number
      created: Date
      modified: Date
      emergency_contact_no: string | null
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = $Result.GetResult<Prisma.$patientsPayload, S>

  type patientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface patientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patients'], meta: { name: 'patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {patientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientsFindUniqueArgs>(args: SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientsFindFirstArgs>(args?: SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.findMany({ select: { patient_id: true } })
     * 
     */
    findMany<T extends patientsFindManyArgs>(args?: SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {patientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends patientsCreateArgs>(args: SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientsCreateManyArgs>(args?: SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.createManyAndReturn({
     *   select: { patient_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {patientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends patientsDeleteArgs>(args: SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {patientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientsUpdateArgs>(args: SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientsDeleteManyArgs>(args?: SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientsUpdateManyArgs>(args: SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.updateManyAndReturn({
     *   select: { patient_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {patientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends patientsUpsertArgs>(args: SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientsCountArgs>(
      args?: Subset<T, patientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientsGroupByArgs['orderBy'] }
        : { orderBy?: patientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patients model
   */
  readonly fields: patientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opd<T extends patients$opdArgs<ExtArgs> = {}>(args?: Subset<T, patients$opdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospitals<T extends hospitalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalsDefaultArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patients model
   */
  interface patientsFieldRefs {
    readonly patient_id: FieldRef<"patients", 'Int'>
    readonly patient_name: FieldRef<"patients", 'String'>
    readonly patient_no: FieldRef<"patients", 'Int'>
    readonly registration_datetime: FieldRef<"patients", 'DateTime'>
    readonly age: FieldRef<"patients", 'Int'>
    readonly blood_group: FieldRef<"patients", 'String'>
    readonly gender: FieldRef<"patients", 'String'>
    readonly occupation: FieldRef<"patients", 'String'>
    readonly address: FieldRef<"patients", 'String'>
    readonly hospital_id: FieldRef<"patients", 'Int'>
    readonly state_id: FieldRef<"patients", 'Int'>
    readonly city_id: FieldRef<"patients", 'Int'>
    readonly pin_code: FieldRef<"patients", 'String'>
    readonly mobile_no: FieldRef<"patients", 'String'>
    readonly referred_by: FieldRef<"patients", 'String'>
    readonly description: FieldRef<"patients", 'String'>
    readonly user_id: FieldRef<"patients", 'Int'>
    readonly created: FieldRef<"patients", 'DateTime'>
    readonly modified: FieldRef<"patients", 'DateTime'>
    readonly emergency_contact_no: FieldRef<"patients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * patients findUnique
   */
  export type patientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findUniqueOrThrow
   */
  export type patientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findFirst
   */
  export type patientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findFirstOrThrow
   */
  export type patientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findMany
   */
  export type patientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients create
   */
  export type patientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to create a patients.
     */
    data: XOR<patientsCreateInput, patientsUncheckedCreateInput>
  }

  /**
   * patients createMany
   */
  export type patientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients createManyAndReturn
   */
  export type patientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * patients update
   */
  export type patientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to update a patients.
     */
    data: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
    /**
     * Choose, which patients to update.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients updateMany
   */
  export type patientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients updateManyAndReturn
   */
  export type patientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * patients upsert
   */
  export type patientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The filter to search for the patients to update in case it exists.
     */
    where: patientsWhereUniqueInput
    /**
     * In case the patients found by the `where` argument doesn't exist, create a new patients with this data.
     */
    create: XOR<patientsCreateInput, patientsUncheckedCreateInput>
    /**
     * In case the patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
  }

  /**
   * patients delete
   */
  export type patientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter which patients to delete.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients deleteMany
   */
  export type patientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patients.opd
   */
  export type patients$opdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opd
     */
    select?: opdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opd
     */
    omit?: opdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opdInclude<ExtArgs> | null
    where?: opdWhereInput
    orderBy?: opdOrderByWithRelationInput | opdOrderByWithRelationInput[]
    cursor?: opdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * patients without action
   */
  export type patientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
  }


  /**
   * Model receipt_tran
   */

  export type AggregateReceipt_tran = {
    _count: Receipt_tranCountAggregateOutputType | null
    _avg: Receipt_tranAvgAggregateOutputType | null
    _sum: Receipt_tranSumAggregateOutputType | null
    _min: Receipt_tranMinAggregateOutputType | null
    _max: Receipt_tranMaxAggregateOutputType | null
  }

  export type Receipt_tranAvgAggregateOutputType = {
    receipt_tran_id: number | null
    receipt_id: number | null
    sub_treatment_type_id: number | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    user_id: number | null
  }

  export type Receipt_tranSumAggregateOutputType = {
    receipt_tran_id: number | null
    receipt_id: number | null
    sub_treatment_type_id: number | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    user_id: number | null
  }

  export type Receipt_tranMinAggregateOutputType = {
    receipt_tran_id: number | null
    receipt_id: number | null
    sub_treatment_type_id: number | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Receipt_tranMaxAggregateOutputType = {
    receipt_tran_id: number | null
    receipt_id: number | null
    sub_treatment_type_id: number | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Receipt_tranCountAggregateOutputType = {
    receipt_tran_id: number
    receipt_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: number
    amount: number
    description: number
    user_id: number
    created: number
    modified: number
    _all: number
  }


  export type Receipt_tranAvgAggregateInputType = {
    receipt_tran_id?: true
    receipt_id?: true
    sub_treatment_type_id?: true
    quantity?: true
    rate?: true
    amount?: true
    user_id?: true
  }

  export type Receipt_tranSumAggregateInputType = {
    receipt_tran_id?: true
    receipt_id?: true
    sub_treatment_type_id?: true
    quantity?: true
    rate?: true
    amount?: true
    user_id?: true
  }

  export type Receipt_tranMinAggregateInputType = {
    receipt_tran_id?: true
    receipt_id?: true
    sub_treatment_type_id?: true
    quantity?: true
    rate?: true
    amount?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Receipt_tranMaxAggregateInputType = {
    receipt_tran_id?: true
    receipt_id?: true
    sub_treatment_type_id?: true
    quantity?: true
    rate?: true
    amount?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Receipt_tranCountAggregateInputType = {
    receipt_tran_id?: true
    receipt_id?: true
    sub_treatment_type_id?: true
    quantity?: true
    rate?: true
    amount?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type Receipt_tranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipt_tran to aggregate.
     */
    where?: receipt_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipt_trans to fetch.
     */
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receipt_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipt_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipt_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receipt_trans
    **/
    _count?: true | Receipt_tranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Receipt_tranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Receipt_tranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Receipt_tranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Receipt_tranMaxAggregateInputType
  }

  export type GetReceipt_tranAggregateType<T extends Receipt_tranAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt_tran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt_tran[P]>
      : GetScalarType<T[P], AggregateReceipt_tran[P]>
  }




  export type receipt_tranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receipt_tranWhereInput
    orderBy?: receipt_tranOrderByWithAggregationInput | receipt_tranOrderByWithAggregationInput[]
    by: Receipt_tranScalarFieldEnum[] | Receipt_tranScalarFieldEnum
    having?: receipt_tranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Receipt_tranCountAggregateInputType | true
    _avg?: Receipt_tranAvgAggregateInputType
    _sum?: Receipt_tranSumAggregateInputType
    _min?: Receipt_tranMinAggregateInputType
    _max?: Receipt_tranMaxAggregateInputType
  }

  export type Receipt_tranGroupByOutputType = {
    receipt_tran_id: number
    receipt_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: Decimal
    amount: Decimal
    description: string | null
    user_id: number
    created: Date
    modified: Date
    _count: Receipt_tranCountAggregateOutputType | null
    _avg: Receipt_tranAvgAggregateOutputType | null
    _sum: Receipt_tranSumAggregateOutputType | null
    _min: Receipt_tranMinAggregateOutputType | null
    _max: Receipt_tranMaxAggregateOutputType | null
  }

  type GetReceipt_tranGroupByPayload<T extends receipt_tranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Receipt_tranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Receipt_tranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Receipt_tranGroupByOutputType[P]>
            : GetScalarType<T[P], Receipt_tranGroupByOutputType[P]>
        }
      >
    >


  export type receipt_tranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_tran_id?: boolean
    receipt_id?: boolean
    sub_treatment_type_id?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt_tran"]>

  export type receipt_tranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_tran_id?: boolean
    receipt_id?: boolean
    sub_treatment_type_id?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt_tran"]>

  export type receipt_tranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_tran_id?: boolean
    receipt_id?: boolean
    sub_treatment_type_id?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt_tran"]>

  export type receipt_tranSelectScalar = {
    receipt_tran_id?: boolean
    receipt_id?: boolean
    sub_treatment_type_id?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
  }

  export type receipt_tranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receipt_tran_id" | "receipt_id" | "sub_treatment_type_id" | "quantity" | "rate" | "amount" | "description" | "user_id" | "created" | "modified", ExtArgs["result"]["receipt_tran"]>
  export type receipt_tranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }
  export type receipt_tranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }
  export type receipt_tranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_treatment_types?: boolean | sub_treatment_typesDefaultArgs<ExtArgs>
    receipts?: boolean | receiptsDefaultArgs<ExtArgs>
  }

  export type $receipt_tranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receipt_tran"
    objects: {
      sub_treatment_types: Prisma.$sub_treatment_typesPayload<ExtArgs>
      receipts: Prisma.$receiptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      receipt_tran_id: number
      receipt_id: number
      sub_treatment_type_id: number
      quantity: number
      rate: Prisma.Decimal
      amount: Prisma.Decimal
      description: string | null
      user_id: number
      created: Date
      modified: Date
    }, ExtArgs["result"]["receipt_tran"]>
    composites: {}
  }

  type receipt_tranGetPayload<S extends boolean | null | undefined | receipt_tranDefaultArgs> = $Result.GetResult<Prisma.$receipt_tranPayload, S>

  type receipt_tranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receipt_tranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Receipt_tranCountAggregateInputType | true
    }

  export interface receipt_tranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receipt_tran'], meta: { name: 'receipt_tran' } }
    /**
     * Find zero or one Receipt_tran that matches the filter.
     * @param {receipt_tranFindUniqueArgs} args - Arguments to find a Receipt_tran
     * @example
     * // Get one Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receipt_tranFindUniqueArgs>(args: SelectSubset<T, receipt_tranFindUniqueArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipt_tran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receipt_tranFindUniqueOrThrowArgs} args - Arguments to find a Receipt_tran
     * @example
     * // Get one Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receipt_tranFindUniqueOrThrowArgs>(args: SelectSubset<T, receipt_tranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt_tran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranFindFirstArgs} args - Arguments to find a Receipt_tran
     * @example
     * // Get one Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receipt_tranFindFirstArgs>(args?: SelectSubset<T, receipt_tranFindFirstArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt_tran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranFindFirstOrThrowArgs} args - Arguments to find a Receipt_tran
     * @example
     * // Get one Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receipt_tranFindFirstOrThrowArgs>(args?: SelectSubset<T, receipt_tranFindFirstOrThrowArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipt_trans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipt_trans
     * const receipt_trans = await prisma.receipt_tran.findMany()
     * 
     * // Get first 10 Receipt_trans
     * const receipt_trans = await prisma.receipt_tran.findMany({ take: 10 })
     * 
     * // Only select the `receipt_tran_id`
     * const receipt_tranWithReceipt_tran_idOnly = await prisma.receipt_tran.findMany({ select: { receipt_tran_id: true } })
     * 
     */
    findMany<T extends receipt_tranFindManyArgs>(args?: SelectSubset<T, receipt_tranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipt_tran.
     * @param {receipt_tranCreateArgs} args - Arguments to create a Receipt_tran.
     * @example
     * // Create one Receipt_tran
     * const Receipt_tran = await prisma.receipt_tran.create({
     *   data: {
     *     // ... data to create a Receipt_tran
     *   }
     * })
     * 
     */
    create<T extends receipt_tranCreateArgs>(args: SelectSubset<T, receipt_tranCreateArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipt_trans.
     * @param {receipt_tranCreateManyArgs} args - Arguments to create many Receipt_trans.
     * @example
     * // Create many Receipt_trans
     * const receipt_tran = await prisma.receipt_tran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receipt_tranCreateManyArgs>(args?: SelectSubset<T, receipt_tranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receipt_trans and returns the data saved in the database.
     * @param {receipt_tranCreateManyAndReturnArgs} args - Arguments to create many Receipt_trans.
     * @example
     * // Create many Receipt_trans
     * const receipt_tran = await prisma.receipt_tran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receipt_trans and only return the `receipt_tran_id`
     * const receipt_tranWithReceipt_tran_idOnly = await prisma.receipt_tran.createManyAndReturn({
     *   select: { receipt_tran_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends receipt_tranCreateManyAndReturnArgs>(args?: SelectSubset<T, receipt_tranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receipt_tran.
     * @param {receipt_tranDeleteArgs} args - Arguments to delete one Receipt_tran.
     * @example
     * // Delete one Receipt_tran
     * const Receipt_tran = await prisma.receipt_tran.delete({
     *   where: {
     *     // ... filter to delete one Receipt_tran
     *   }
     * })
     * 
     */
    delete<T extends receipt_tranDeleteArgs>(args: SelectSubset<T, receipt_tranDeleteArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipt_tran.
     * @param {receipt_tranUpdateArgs} args - Arguments to update one Receipt_tran.
     * @example
     * // Update one Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receipt_tranUpdateArgs>(args: SelectSubset<T, receipt_tranUpdateArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipt_trans.
     * @param {receipt_tranDeleteManyArgs} args - Arguments to filter Receipt_trans to delete.
     * @example
     * // Delete a few Receipt_trans
     * const { count } = await prisma.receipt_tran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receipt_tranDeleteManyArgs>(args?: SelectSubset<T, receipt_tranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipt_trans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipt_trans
     * const receipt_tran = await prisma.receipt_tran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receipt_tranUpdateManyArgs>(args: SelectSubset<T, receipt_tranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipt_trans and returns the data updated in the database.
     * @param {receipt_tranUpdateManyAndReturnArgs} args - Arguments to update many Receipt_trans.
     * @example
     * // Update many Receipt_trans
     * const receipt_tran = await prisma.receipt_tran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receipt_trans and only return the `receipt_tran_id`
     * const receipt_tranWithReceipt_tran_idOnly = await prisma.receipt_tran.updateManyAndReturn({
     *   select: { receipt_tran_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends receipt_tranUpdateManyAndReturnArgs>(args: SelectSubset<T, receipt_tranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receipt_tran.
     * @param {receipt_tranUpsertArgs} args - Arguments to update or create a Receipt_tran.
     * @example
     * // Update or create a Receipt_tran
     * const receipt_tran = await prisma.receipt_tran.upsert({
     *   create: {
     *     // ... data to create a Receipt_tran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt_tran we want to update
     *   }
     * })
     */
    upsert<T extends receipt_tranUpsertArgs>(args: SelectSubset<T, receipt_tranUpsertArgs<ExtArgs>>): Prisma__receipt_tranClient<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipt_trans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranCountArgs} args - Arguments to filter Receipt_trans to count.
     * @example
     * // Count the number of Receipt_trans
     * const count = await prisma.receipt_tran.count({
     *   where: {
     *     // ... the filter for the Receipt_trans we want to count
     *   }
     * })
    **/
    count<T extends receipt_tranCountArgs>(
      args?: Subset<T, receipt_tranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Receipt_tranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt_tran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receipt_tranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Receipt_tranAggregateArgs>(args: Subset<T, Receipt_tranAggregateArgs>): Prisma.PrismaPromise<GetReceipt_tranAggregateType<T>>

    /**
     * Group by Receipt_tran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receipt_tranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receipt_tranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receipt_tranGroupByArgs['orderBy'] }
        : { orderBy?: receipt_tranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receipt_tranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceipt_tranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receipt_tran model
   */
  readonly fields: receipt_tranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receipt_tran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receipt_tranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sub_treatment_types<T extends sub_treatment_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sub_treatment_typesDefaultArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receipts<T extends receiptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, receiptsDefaultArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receipt_tran model
   */
  interface receipt_tranFieldRefs {
    readonly receipt_tran_id: FieldRef<"receipt_tran", 'Int'>
    readonly receipt_id: FieldRef<"receipt_tran", 'Int'>
    readonly sub_treatment_type_id: FieldRef<"receipt_tran", 'Int'>
    readonly quantity: FieldRef<"receipt_tran", 'Int'>
    readonly rate: FieldRef<"receipt_tran", 'Decimal'>
    readonly amount: FieldRef<"receipt_tran", 'Decimal'>
    readonly description: FieldRef<"receipt_tran", 'String'>
    readonly user_id: FieldRef<"receipt_tran", 'Int'>
    readonly created: FieldRef<"receipt_tran", 'DateTime'>
    readonly modified: FieldRef<"receipt_tran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * receipt_tran findUnique
   */
  export type receipt_tranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter, which receipt_tran to fetch.
     */
    where: receipt_tranWhereUniqueInput
  }

  /**
   * receipt_tran findUniqueOrThrow
   */
  export type receipt_tranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter, which receipt_tran to fetch.
     */
    where: receipt_tranWhereUniqueInput
  }

  /**
   * receipt_tran findFirst
   */
  export type receipt_tranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter, which receipt_tran to fetch.
     */
    where?: receipt_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipt_trans to fetch.
     */
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipt_trans.
     */
    cursor?: receipt_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipt_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipt_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipt_trans.
     */
    distinct?: Receipt_tranScalarFieldEnum | Receipt_tranScalarFieldEnum[]
  }

  /**
   * receipt_tran findFirstOrThrow
   */
  export type receipt_tranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter, which receipt_tran to fetch.
     */
    where?: receipt_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipt_trans to fetch.
     */
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipt_trans.
     */
    cursor?: receipt_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipt_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipt_trans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipt_trans.
     */
    distinct?: Receipt_tranScalarFieldEnum | Receipt_tranScalarFieldEnum[]
  }

  /**
   * receipt_tran findMany
   */
  export type receipt_tranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter, which receipt_trans to fetch.
     */
    where?: receipt_tranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipt_trans to fetch.
     */
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receipt_trans.
     */
    cursor?: receipt_tranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipt_trans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipt_trans.
     */
    skip?: number
    distinct?: Receipt_tranScalarFieldEnum | Receipt_tranScalarFieldEnum[]
  }

  /**
   * receipt_tran create
   */
  export type receipt_tranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * The data needed to create a receipt_tran.
     */
    data: XOR<receipt_tranCreateInput, receipt_tranUncheckedCreateInput>
  }

  /**
   * receipt_tran createMany
   */
  export type receipt_tranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receipt_trans.
     */
    data: receipt_tranCreateManyInput | receipt_tranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipt_tran createManyAndReturn
   */
  export type receipt_tranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * The data used to create many receipt_trans.
     */
    data: receipt_tranCreateManyInput | receipt_tranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * receipt_tran update
   */
  export type receipt_tranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * The data needed to update a receipt_tran.
     */
    data: XOR<receipt_tranUpdateInput, receipt_tranUncheckedUpdateInput>
    /**
     * Choose, which receipt_tran to update.
     */
    where: receipt_tranWhereUniqueInput
  }

  /**
   * receipt_tran updateMany
   */
  export type receipt_tranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receipt_trans.
     */
    data: XOR<receipt_tranUpdateManyMutationInput, receipt_tranUncheckedUpdateManyInput>
    /**
     * Filter which receipt_trans to update
     */
    where?: receipt_tranWhereInput
    /**
     * Limit how many receipt_trans to update.
     */
    limit?: number
  }

  /**
   * receipt_tran updateManyAndReturn
   */
  export type receipt_tranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * The data used to update receipt_trans.
     */
    data: XOR<receipt_tranUpdateManyMutationInput, receipt_tranUncheckedUpdateManyInput>
    /**
     * Filter which receipt_trans to update
     */
    where?: receipt_tranWhereInput
    /**
     * Limit how many receipt_trans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * receipt_tran upsert
   */
  export type receipt_tranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * The filter to search for the receipt_tran to update in case it exists.
     */
    where: receipt_tranWhereUniqueInput
    /**
     * In case the receipt_tran found by the `where` argument doesn't exist, create a new receipt_tran with this data.
     */
    create: XOR<receipt_tranCreateInput, receipt_tranUncheckedCreateInput>
    /**
     * In case the receipt_tran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receipt_tranUpdateInput, receipt_tranUncheckedUpdateInput>
  }

  /**
   * receipt_tran delete
   */
  export type receipt_tranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    /**
     * Filter which receipt_tran to delete.
     */
    where: receipt_tranWhereUniqueInput
  }

  /**
   * receipt_tran deleteMany
   */
  export type receipt_tranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipt_trans to delete
     */
    where?: receipt_tranWhereInput
    /**
     * Limit how many receipt_trans to delete.
     */
    limit?: number
  }

  /**
   * receipt_tran without action
   */
  export type receipt_tranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
  }


  /**
   * Model receipts
   */

  export type AggregateReceipts = {
    _count: ReceiptsCountAggregateOutputType | null
    _avg: ReceiptsAvgAggregateOutputType | null
    _sum: ReceiptsSumAggregateOutputType | null
    _min: ReceiptsMinAggregateOutputType | null
    _max: ReceiptsMaxAggregateOutputType | null
  }

  export type ReceiptsAvgAggregateOutputType = {
    receipt_id: number | null
    opd_id: number | null
    amount_paid: Decimal | null
    user_id: number | null
    payment_mode_id: number | null
    cancellation_by_user_id: number | null
  }

  export type ReceiptsSumAggregateOutputType = {
    receipt_id: number | null
    opd_id: number | null
    amount_paid: Decimal | null
    user_id: number | null
    payment_mode_id: number | null
    cancellation_by_user_id: number | null
  }

  export type ReceiptsMinAggregateOutputType = {
    receipt_id: number | null
    receipt_no: string | null
    receipt_date: Date | null
    opd_id: number | null
    amount_paid: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    payment_mode_id: number | null
    reference_no: string | null
    reference_date: Date | null
    cancellation_datetime: Date | null
    cancellation_by_user_id: number | null
    cancellation_remarks: string | null
  }

  export type ReceiptsMaxAggregateOutputType = {
    receipt_id: number | null
    receipt_no: string | null
    receipt_date: Date | null
    opd_id: number | null
    amount_paid: Decimal | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    payment_mode_id: number | null
    reference_no: string | null
    reference_date: Date | null
    cancellation_datetime: Date | null
    cancellation_by_user_id: number | null
    cancellation_remarks: string | null
  }

  export type ReceiptsCountAggregateOutputType = {
    receipt_id: number
    receipt_no: number
    receipt_date: number
    opd_id: number
    amount_paid: number
    description: number
    user_id: number
    created: number
    modified: number
    payment_mode_id: number
    reference_no: number
    reference_date: number
    cancellation_datetime: number
    cancellation_by_user_id: number
    cancellation_remarks: number
    _all: number
  }


  export type ReceiptsAvgAggregateInputType = {
    receipt_id?: true
    opd_id?: true
    amount_paid?: true
    user_id?: true
    payment_mode_id?: true
    cancellation_by_user_id?: true
  }

  export type ReceiptsSumAggregateInputType = {
    receipt_id?: true
    opd_id?: true
    amount_paid?: true
    user_id?: true
    payment_mode_id?: true
    cancellation_by_user_id?: true
  }

  export type ReceiptsMinAggregateInputType = {
    receipt_id?: true
    receipt_no?: true
    receipt_date?: true
    opd_id?: true
    amount_paid?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    payment_mode_id?: true
    reference_no?: true
    reference_date?: true
    cancellation_datetime?: true
    cancellation_by_user_id?: true
    cancellation_remarks?: true
  }

  export type ReceiptsMaxAggregateInputType = {
    receipt_id?: true
    receipt_no?: true
    receipt_date?: true
    opd_id?: true
    amount_paid?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    payment_mode_id?: true
    reference_no?: true
    reference_date?: true
    cancellation_datetime?: true
    cancellation_by_user_id?: true
    cancellation_remarks?: true
  }

  export type ReceiptsCountAggregateInputType = {
    receipt_id?: true
    receipt_no?: true
    receipt_date?: true
    opd_id?: true
    amount_paid?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    payment_mode_id?: true
    reference_no?: true
    reference_date?: true
    cancellation_datetime?: true
    cancellation_by_user_id?: true
    cancellation_remarks?: true
    _all?: true
  }

  export type ReceiptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipts to aggregate.
     */
    where?: receiptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptsOrderByWithRelationInput | receiptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receipts
    **/
    _count?: true | ReceiptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptsMaxAggregateInputType
  }

  export type GetReceiptsAggregateType<T extends ReceiptsAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipts[P]>
      : GetScalarType<T[P], AggregateReceipts[P]>
  }




  export type receiptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptsWhereInput
    orderBy?: receiptsOrderByWithAggregationInput | receiptsOrderByWithAggregationInput[]
    by: ReceiptsScalarFieldEnum[] | ReceiptsScalarFieldEnum
    having?: receiptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptsCountAggregateInputType | true
    _avg?: ReceiptsAvgAggregateInputType
    _sum?: ReceiptsSumAggregateInputType
    _min?: ReceiptsMinAggregateInputType
    _max?: ReceiptsMaxAggregateInputType
  }

  export type ReceiptsGroupByOutputType = {
    receipt_id: number
    receipt_no: string | null
    receipt_date: Date
    opd_id: number
    amount_paid: Decimal
    description: string | null
    user_id: number
    created: Date
    modified: Date
    payment_mode_id: number
    reference_no: string | null
    reference_date: Date | null
    cancellation_datetime: Date | null
    cancellation_by_user_id: number | null
    cancellation_remarks: string | null
    _count: ReceiptsCountAggregateOutputType | null
    _avg: ReceiptsAvgAggregateOutputType | null
    _sum: ReceiptsSumAggregateOutputType | null
    _min: ReceiptsMinAggregateOutputType | null
    _max: ReceiptsMaxAggregateOutputType | null
  }

  type GetReceiptsGroupByPayload<T extends receiptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptsGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptsGroupByOutputType[P]>
        }
      >
    >


  export type receiptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    receipt_no?: boolean
    receipt_date?: boolean
    opd_id?: boolean
    amount_paid?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    payment_mode_id?: boolean
    reference_no?: boolean
    reference_date?: boolean
    cancellation_datetime?: boolean
    cancellation_by_user_id?: boolean
    cancellation_remarks?: boolean
    receipt_tran?: boolean | receipts$receipt_tranArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
    _count?: boolean | ReceiptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipts"]>

  export type receiptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    receipt_no?: boolean
    receipt_date?: boolean
    opd_id?: boolean
    amount_paid?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    payment_mode_id?: boolean
    reference_no?: boolean
    reference_date?: boolean
    cancellation_datetime?: boolean
    cancellation_by_user_id?: boolean
    cancellation_remarks?: boolean
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipts"]>

  export type receiptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receipt_id?: boolean
    receipt_no?: boolean
    receipt_date?: boolean
    opd_id?: boolean
    amount_paid?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    payment_mode_id?: boolean
    reference_no?: boolean
    reference_date?: boolean
    cancellation_datetime?: boolean
    cancellation_by_user_id?: boolean
    cancellation_remarks?: boolean
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipts"]>

  export type receiptsSelectScalar = {
    receipt_id?: boolean
    receipt_no?: boolean
    receipt_date?: boolean
    opd_id?: boolean
    amount_paid?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    payment_mode_id?: boolean
    reference_no?: boolean
    reference_date?: boolean
    cancellation_datetime?: boolean
    cancellation_by_user_id?: boolean
    cancellation_remarks?: boolean
  }

  export type receiptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receipt_id" | "receipt_no" | "receipt_date" | "opd_id" | "amount_paid" | "description" | "user_id" | "created" | "modified" | "payment_mode_id" | "reference_no" | "reference_date" | "cancellation_datetime" | "cancellation_by_user_id" | "cancellation_remarks", ExtArgs["result"]["receipts"]>
  export type receiptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt_tran?: boolean | receipts$receipt_tranArgs<ExtArgs>
    opd?: boolean | opdDefaultArgs<ExtArgs>
    _count?: boolean | ReceiptsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type receiptsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }
  export type receiptsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | opdDefaultArgs<ExtArgs>
  }

  export type $receiptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receipts"
    objects: {
      receipt_tran: Prisma.$receipt_tranPayload<ExtArgs>[]
      opd: Prisma.$opdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      receipt_id: number
      receipt_no: string | null
      receipt_date: Date
      opd_id: number
      amount_paid: Prisma.Decimal
      description: string | null
      user_id: number
      created: Date
      modified: Date
      payment_mode_id: number
      reference_no: string | null
      reference_date: Date | null
      cancellation_datetime: Date | null
      cancellation_by_user_id: number | null
      cancellation_remarks: string | null
    }, ExtArgs["result"]["receipts"]>
    composites: {}
  }

  type receiptsGetPayload<S extends boolean | null | undefined | receiptsDefaultArgs> = $Result.GetResult<Prisma.$receiptsPayload, S>

  type receiptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptsCountAggregateInputType | true
    }

  export interface receiptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receipts'], meta: { name: 'receipts' } }
    /**
     * Find zero or one Receipts that matches the filter.
     * @param {receiptsFindUniqueArgs} args - Arguments to find a Receipts
     * @example
     * // Get one Receipts
     * const receipts = await prisma.receipts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptsFindUniqueArgs>(args: SelectSubset<T, receiptsFindUniqueArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptsFindUniqueOrThrowArgs} args - Arguments to find a Receipts
     * @example
     * // Get one Receipts
     * const receipts = await prisma.receipts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptsFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsFindFirstArgs} args - Arguments to find a Receipts
     * @example
     * // Get one Receipts
     * const receipts = await prisma.receipts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptsFindFirstArgs>(args?: SelectSubset<T, receiptsFindFirstArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsFindFirstOrThrowArgs} args - Arguments to find a Receipts
     * @example
     * // Get one Receipts
     * const receipts = await prisma.receipts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptsFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipts.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipts.findMany({ take: 10 })
     * 
     * // Only select the `receipt_id`
     * const receiptsWithReceipt_idOnly = await prisma.receipts.findMany({ select: { receipt_id: true } })
     * 
     */
    findMany<T extends receiptsFindManyArgs>(args?: SelectSubset<T, receiptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipts.
     * @param {receiptsCreateArgs} args - Arguments to create a Receipts.
     * @example
     * // Create one Receipts
     * const Receipts = await prisma.receipts.create({
     *   data: {
     *     // ... data to create a Receipts
     *   }
     * })
     * 
     */
    create<T extends receiptsCreateArgs>(args: SelectSubset<T, receiptsCreateArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipts.
     * @param {receiptsCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipts = await prisma.receipts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptsCreateManyArgs>(args?: SelectSubset<T, receiptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receipts and returns the data saved in the database.
     * @param {receiptsCreateManyAndReturnArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipts = await prisma.receipts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receipts and only return the `receipt_id`
     * const receiptsWithReceipt_idOnly = await prisma.receipts.createManyAndReturn({
     *   select: { receipt_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends receiptsCreateManyAndReturnArgs>(args?: SelectSubset<T, receiptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receipts.
     * @param {receiptsDeleteArgs} args - Arguments to delete one Receipts.
     * @example
     * // Delete one Receipts
     * const Receipts = await prisma.receipts.delete({
     *   where: {
     *     // ... filter to delete one Receipts
     *   }
     * })
     * 
     */
    delete<T extends receiptsDeleteArgs>(args: SelectSubset<T, receiptsDeleteArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipts.
     * @param {receiptsUpdateArgs} args - Arguments to update one Receipts.
     * @example
     * // Update one Receipts
     * const receipts = await prisma.receipts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptsUpdateArgs>(args: SelectSubset<T, receiptsUpdateArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipts.
     * @param {receiptsDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptsDeleteManyArgs>(args?: SelectSubset<T, receiptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipts = await prisma.receipts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptsUpdateManyArgs>(args: SelectSubset<T, receiptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts and returns the data updated in the database.
     * @param {receiptsUpdateManyAndReturnArgs} args - Arguments to update many Receipts.
     * @example
     * // Update many Receipts
     * const receipts = await prisma.receipts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receipts and only return the `receipt_id`
     * const receiptsWithReceipt_idOnly = await prisma.receipts.updateManyAndReturn({
     *   select: { receipt_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends receiptsUpdateManyAndReturnArgs>(args: SelectSubset<T, receiptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receipts.
     * @param {receiptsUpsertArgs} args - Arguments to update or create a Receipts.
     * @example
     * // Update or create a Receipts
     * const receipts = await prisma.receipts.upsert({
     *   create: {
     *     // ... data to create a Receipts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipts we want to update
     *   }
     * })
     */
    upsert<T extends receiptsUpsertArgs>(args: SelectSubset<T, receiptsUpsertArgs<ExtArgs>>): Prisma__receiptsClient<$Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipts.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends receiptsCountArgs>(
      args?: Subset<T, receiptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptsAggregateArgs>(args: Subset<T, ReceiptsAggregateArgs>): Prisma.PrismaPromise<GetReceiptsAggregateType<T>>

    /**
     * Group by Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptsGroupByArgs['orderBy'] }
        : { orderBy?: receiptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receipts model
   */
  readonly fields: receiptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receipts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt_tran<T extends receipts$receipt_tranArgs<ExtArgs> = {}>(args?: Subset<T, receipts$receipt_tranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opd<T extends opdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, opdDefaultArgs<ExtArgs>>): Prisma__opdClient<$Result.GetResult<Prisma.$opdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receipts model
   */
  interface receiptsFieldRefs {
    readonly receipt_id: FieldRef<"receipts", 'Int'>
    readonly receipt_no: FieldRef<"receipts", 'String'>
    readonly receipt_date: FieldRef<"receipts", 'DateTime'>
    readonly opd_id: FieldRef<"receipts", 'Int'>
    readonly amount_paid: FieldRef<"receipts", 'Decimal'>
    readonly description: FieldRef<"receipts", 'String'>
    readonly user_id: FieldRef<"receipts", 'Int'>
    readonly created: FieldRef<"receipts", 'DateTime'>
    readonly modified: FieldRef<"receipts", 'DateTime'>
    readonly payment_mode_id: FieldRef<"receipts", 'Int'>
    readonly reference_no: FieldRef<"receipts", 'String'>
    readonly reference_date: FieldRef<"receipts", 'DateTime'>
    readonly cancellation_datetime: FieldRef<"receipts", 'DateTime'>
    readonly cancellation_by_user_id: FieldRef<"receipts", 'Int'>
    readonly cancellation_remarks: FieldRef<"receipts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * receipts findUnique
   */
  export type receiptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where: receiptsWhereUniqueInput
  }

  /**
   * receipts findUniqueOrThrow
   */
  export type receiptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where: receiptsWhereUniqueInput
  }

  /**
   * receipts findFirst
   */
  export type receiptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptsOrderByWithRelationInput | receiptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptsScalarFieldEnum | ReceiptsScalarFieldEnum[]
  }

  /**
   * receipts findFirstOrThrow
   */
  export type receiptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptsOrderByWithRelationInput | receiptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptsScalarFieldEnum | ReceiptsScalarFieldEnum[]
  }

  /**
   * receipts findMany
   */
  export type receiptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptsOrderByWithRelationInput | receiptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receipts.
     */
    cursor?: receiptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    distinct?: ReceiptsScalarFieldEnum | ReceiptsScalarFieldEnum[]
  }

  /**
   * receipts create
   */
  export type receiptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * The data needed to create a receipts.
     */
    data: XOR<receiptsCreateInput, receiptsUncheckedCreateInput>
  }

  /**
   * receipts createMany
   */
  export type receiptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receipts.
     */
    data: receiptsCreateManyInput | receiptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipts createManyAndReturn
   */
  export type receiptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * The data used to create many receipts.
     */
    data: receiptsCreateManyInput | receiptsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * receipts update
   */
  export type receiptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * The data needed to update a receipts.
     */
    data: XOR<receiptsUpdateInput, receiptsUncheckedUpdateInput>
    /**
     * Choose, which receipts to update.
     */
    where: receiptsWhereUniqueInput
  }

  /**
   * receipts updateMany
   */
  export type receiptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receipts.
     */
    data: XOR<receiptsUpdateManyMutationInput, receiptsUncheckedUpdateManyInput>
    /**
     * Filter which receipts to update
     */
    where?: receiptsWhereInput
    /**
     * Limit how many receipts to update.
     */
    limit?: number
  }

  /**
   * receipts updateManyAndReturn
   */
  export type receiptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * The data used to update receipts.
     */
    data: XOR<receiptsUpdateManyMutationInput, receiptsUncheckedUpdateManyInput>
    /**
     * Filter which receipts to update
     */
    where?: receiptsWhereInput
    /**
     * Limit how many receipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * receipts upsert
   */
  export type receiptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * The filter to search for the receipts to update in case it exists.
     */
    where: receiptsWhereUniqueInput
    /**
     * In case the receipts found by the `where` argument doesn't exist, create a new receipts with this data.
     */
    create: XOR<receiptsCreateInput, receiptsUncheckedCreateInput>
    /**
     * In case the receipts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptsUpdateInput, receiptsUncheckedUpdateInput>
  }

  /**
   * receipts delete
   */
  export type receiptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
    /**
     * Filter which receipts to delete.
     */
    where: receiptsWhereUniqueInput
  }

  /**
   * receipts deleteMany
   */
  export type receiptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipts to delete
     */
    where?: receiptsWhereInput
    /**
     * Limit how many receipts to delete.
     */
    limit?: number
  }

  /**
   * receipts.receipt_tran
   */
  export type receipts$receipt_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    where?: receipt_tranWhereInput
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    cursor?: receipt_tranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Receipt_tranScalarFieldEnum | Receipt_tranScalarFieldEnum[]
  }

  /**
   * receipts without action
   */
  export type receiptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipts
     */
    select?: receiptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipts
     */
    omit?: receiptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptsInclude<ExtArgs> | null
  }


  /**
   * Model sub_treatment_types
   */

  export type AggregateSub_treatment_types = {
    _count: Sub_treatment_typesCountAggregateOutputType | null
    _avg: Sub_treatment_typesAvgAggregateOutputType | null
    _sum: Sub_treatment_typesSumAggregateOutputType | null
    _min: Sub_treatment_typesMinAggregateOutputType | null
    _max: Sub_treatment_typesMaxAggregateOutputType | null
  }

  export type Sub_treatment_typesAvgAggregateOutputType = {
    sub_treatment_type_id: number | null
    treatment_type_id: number | null
    rate: Decimal | null
    user_id: number | null
    account_id: number | null
  }

  export type Sub_treatment_typesSumAggregateOutputType = {
    sub_treatment_type_id: number | null
    treatment_type_id: number | null
    rate: Decimal | null
    user_id: number | null
    account_id: number | null
  }

  export type Sub_treatment_typesMinAggregateOutputType = {
    sub_treatment_type_id: number | null
    sub_treatment_type_name: string | null
    treatment_type_id: number | null
    rate: Decimal | null
    is_active: boolean | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    account_id: number | null
  }

  export type Sub_treatment_typesMaxAggregateOutputType = {
    sub_treatment_type_id: number | null
    sub_treatment_type_name: string | null
    treatment_type_id: number | null
    rate: Decimal | null
    is_active: boolean | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
    account_id: number | null
  }

  export type Sub_treatment_typesCountAggregateOutputType = {
    sub_treatment_type_id: number
    sub_treatment_type_name: number
    treatment_type_id: number
    rate: number
    is_active: number
    description: number
    user_id: number
    created: number
    modified: number
    account_id: number
    _all: number
  }


  export type Sub_treatment_typesAvgAggregateInputType = {
    sub_treatment_type_id?: true
    treatment_type_id?: true
    rate?: true
    user_id?: true
    account_id?: true
  }

  export type Sub_treatment_typesSumAggregateInputType = {
    sub_treatment_type_id?: true
    treatment_type_id?: true
    rate?: true
    user_id?: true
    account_id?: true
  }

  export type Sub_treatment_typesMinAggregateInputType = {
    sub_treatment_type_id?: true
    sub_treatment_type_name?: true
    treatment_type_id?: true
    rate?: true
    is_active?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    account_id?: true
  }

  export type Sub_treatment_typesMaxAggregateInputType = {
    sub_treatment_type_id?: true
    sub_treatment_type_name?: true
    treatment_type_id?: true
    rate?: true
    is_active?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    account_id?: true
  }

  export type Sub_treatment_typesCountAggregateInputType = {
    sub_treatment_type_id?: true
    sub_treatment_type_name?: true
    treatment_type_id?: true
    rate?: true
    is_active?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    account_id?: true
    _all?: true
  }

  export type Sub_treatment_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_treatment_types to aggregate.
     */
    where?: sub_treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_treatment_types to fetch.
     */
    orderBy?: sub_treatment_typesOrderByWithRelationInput | sub_treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_treatment_types
    **/
    _count?: true | Sub_treatment_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_treatment_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_treatment_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_treatment_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_treatment_typesMaxAggregateInputType
  }

  export type GetSub_treatment_typesAggregateType<T extends Sub_treatment_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_treatment_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_treatment_types[P]>
      : GetScalarType<T[P], AggregateSub_treatment_types[P]>
  }




  export type sub_treatment_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_treatment_typesWhereInput
    orderBy?: sub_treatment_typesOrderByWithAggregationInput | sub_treatment_typesOrderByWithAggregationInput[]
    by: Sub_treatment_typesScalarFieldEnum[] | Sub_treatment_typesScalarFieldEnum
    having?: sub_treatment_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_treatment_typesCountAggregateInputType | true
    _avg?: Sub_treatment_typesAvgAggregateInputType
    _sum?: Sub_treatment_typesSumAggregateInputType
    _min?: Sub_treatment_typesMinAggregateInputType
    _max?: Sub_treatment_typesMaxAggregateInputType
  }

  export type Sub_treatment_typesGroupByOutputType = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    treatment_type_id: number
    rate: Decimal
    is_active: boolean
    description: string | null
    user_id: number
    created: Date
    modified: Date
    account_id: number | null
    _count: Sub_treatment_typesCountAggregateOutputType | null
    _avg: Sub_treatment_typesAvgAggregateOutputType | null
    _sum: Sub_treatment_typesSumAggregateOutputType | null
    _min: Sub_treatment_typesMinAggregateOutputType | null
    _max: Sub_treatment_typesMaxAggregateOutputType | null
  }

  type GetSub_treatment_typesGroupByPayload<T extends sub_treatment_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_treatment_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_treatment_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_treatment_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_treatment_typesGroupByOutputType[P]>
        }
      >
    >


  export type sub_treatment_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_treatment_type_id?: boolean
    sub_treatment_type_name?: boolean
    treatment_type_id?: boolean
    rate?: boolean
    is_active?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    account_id?: boolean
    receipt_tran?: boolean | sub_treatment_types$receipt_tranArgs<ExtArgs>
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
    _count?: boolean | Sub_treatment_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_treatment_types"]>

  export type sub_treatment_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_treatment_type_id?: boolean
    sub_treatment_type_name?: boolean
    treatment_type_id?: boolean
    rate?: boolean
    is_active?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    account_id?: boolean
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_treatment_types"]>

  export type sub_treatment_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_treatment_type_id?: boolean
    sub_treatment_type_name?: boolean
    treatment_type_id?: boolean
    rate?: boolean
    is_active?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    account_id?: boolean
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_treatment_types"]>

  export type sub_treatment_typesSelectScalar = {
    sub_treatment_type_id?: boolean
    sub_treatment_type_name?: boolean
    treatment_type_id?: boolean
    rate?: boolean
    is_active?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    account_id?: boolean
  }

  export type sub_treatment_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_treatment_type_id" | "sub_treatment_type_name" | "treatment_type_id" | "rate" | "is_active" | "description" | "user_id" | "created" | "modified" | "account_id", ExtArgs["result"]["sub_treatment_types"]>
  export type sub_treatment_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt_tran?: boolean | sub_treatment_types$receipt_tranArgs<ExtArgs>
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
    _count?: boolean | Sub_treatment_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sub_treatment_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
  }
  export type sub_treatment_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment_types?: boolean | treatment_typesDefaultArgs<ExtArgs>
  }

  export type $sub_treatment_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_treatment_types"
    objects: {
      receipt_tran: Prisma.$receipt_tranPayload<ExtArgs>[]
      treatment_types: Prisma.$treatment_typesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_treatment_type_id: number
      sub_treatment_type_name: string
      treatment_type_id: number
      rate: Prisma.Decimal
      is_active: boolean
      description: string | null
      user_id: number
      created: Date
      modified: Date
      account_id: number | null
    }, ExtArgs["result"]["sub_treatment_types"]>
    composites: {}
  }

  type sub_treatment_typesGetPayload<S extends boolean | null | undefined | sub_treatment_typesDefaultArgs> = $Result.GetResult<Prisma.$sub_treatment_typesPayload, S>

  type sub_treatment_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_treatment_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_treatment_typesCountAggregateInputType | true
    }

  export interface sub_treatment_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_treatment_types'], meta: { name: 'sub_treatment_types' } }
    /**
     * Find zero or one Sub_treatment_types that matches the filter.
     * @param {sub_treatment_typesFindUniqueArgs} args - Arguments to find a Sub_treatment_types
     * @example
     * // Get one Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_treatment_typesFindUniqueArgs>(args: SelectSubset<T, sub_treatment_typesFindUniqueArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_treatment_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_treatment_typesFindUniqueOrThrowArgs} args - Arguments to find a Sub_treatment_types
     * @example
     * // Get one Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_treatment_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_treatment_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_treatment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesFindFirstArgs} args - Arguments to find a Sub_treatment_types
     * @example
     * // Get one Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_treatment_typesFindFirstArgs>(args?: SelectSubset<T, sub_treatment_typesFindFirstArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_treatment_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesFindFirstOrThrowArgs} args - Arguments to find a Sub_treatment_types
     * @example
     * // Get one Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_treatment_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_treatment_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_treatment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findMany()
     * 
     * // Get first 10 Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.findMany({ take: 10 })
     * 
     * // Only select the `sub_treatment_type_id`
     * const sub_treatment_typesWithSub_treatment_type_idOnly = await prisma.sub_treatment_types.findMany({ select: { sub_treatment_type_id: true } })
     * 
     */
    findMany<T extends sub_treatment_typesFindManyArgs>(args?: SelectSubset<T, sub_treatment_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_treatment_types.
     * @param {sub_treatment_typesCreateArgs} args - Arguments to create a Sub_treatment_types.
     * @example
     * // Create one Sub_treatment_types
     * const Sub_treatment_types = await prisma.sub_treatment_types.create({
     *   data: {
     *     // ... data to create a Sub_treatment_types
     *   }
     * })
     * 
     */
    create<T extends sub_treatment_typesCreateArgs>(args: SelectSubset<T, sub_treatment_typesCreateArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_treatment_types.
     * @param {sub_treatment_typesCreateManyArgs} args - Arguments to create many Sub_treatment_types.
     * @example
     * // Create many Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_treatment_typesCreateManyArgs>(args?: SelectSubset<T, sub_treatment_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sub_treatment_types and returns the data saved in the database.
     * @param {sub_treatment_typesCreateManyAndReturnArgs} args - Arguments to create many Sub_treatment_types.
     * @example
     * // Create many Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sub_treatment_types and only return the `sub_treatment_type_id`
     * const sub_treatment_typesWithSub_treatment_type_idOnly = await prisma.sub_treatment_types.createManyAndReturn({
     *   select: { sub_treatment_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sub_treatment_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, sub_treatment_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sub_treatment_types.
     * @param {sub_treatment_typesDeleteArgs} args - Arguments to delete one Sub_treatment_types.
     * @example
     * // Delete one Sub_treatment_types
     * const Sub_treatment_types = await prisma.sub_treatment_types.delete({
     *   where: {
     *     // ... filter to delete one Sub_treatment_types
     *   }
     * })
     * 
     */
    delete<T extends sub_treatment_typesDeleteArgs>(args: SelectSubset<T, sub_treatment_typesDeleteArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_treatment_types.
     * @param {sub_treatment_typesUpdateArgs} args - Arguments to update one Sub_treatment_types.
     * @example
     * // Update one Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_treatment_typesUpdateArgs>(args: SelectSubset<T, sub_treatment_typesUpdateArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_treatment_types.
     * @param {sub_treatment_typesDeleteManyArgs} args - Arguments to filter Sub_treatment_types to delete.
     * @example
     * // Delete a few Sub_treatment_types
     * const { count } = await prisma.sub_treatment_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_treatment_typesDeleteManyArgs>(args?: SelectSubset<T, sub_treatment_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_treatment_typesUpdateManyArgs>(args: SelectSubset<T, sub_treatment_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_treatment_types and returns the data updated in the database.
     * @param {sub_treatment_typesUpdateManyAndReturnArgs} args - Arguments to update many Sub_treatment_types.
     * @example
     * // Update many Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sub_treatment_types and only return the `sub_treatment_type_id`
     * const sub_treatment_typesWithSub_treatment_type_idOnly = await prisma.sub_treatment_types.updateManyAndReturn({
     *   select: { sub_treatment_type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sub_treatment_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, sub_treatment_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sub_treatment_types.
     * @param {sub_treatment_typesUpsertArgs} args - Arguments to update or create a Sub_treatment_types.
     * @example
     * // Update or create a Sub_treatment_types
     * const sub_treatment_types = await prisma.sub_treatment_types.upsert({
     *   create: {
     *     // ... data to create a Sub_treatment_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_treatment_types we want to update
     *   }
     * })
     */
    upsert<T extends sub_treatment_typesUpsertArgs>(args: SelectSubset<T, sub_treatment_typesUpsertArgs<ExtArgs>>): Prisma__sub_treatment_typesClient<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesCountArgs} args - Arguments to filter Sub_treatment_types to count.
     * @example
     * // Count the number of Sub_treatment_types
     * const count = await prisma.sub_treatment_types.count({
     *   where: {
     *     // ... the filter for the Sub_treatment_types we want to count
     *   }
     * })
    **/
    count<T extends sub_treatment_typesCountArgs>(
      args?: Subset<T, sub_treatment_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_treatment_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_treatment_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sub_treatment_typesAggregateArgs>(args: Subset<T, Sub_treatment_typesAggregateArgs>): Prisma.PrismaPromise<GetSub_treatment_typesAggregateType<T>>

    /**
     * Group by Sub_treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_treatment_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sub_treatment_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_treatment_typesGroupByArgs['orderBy'] }
        : { orderBy?: sub_treatment_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sub_treatment_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_treatment_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_treatment_types model
   */
  readonly fields: sub_treatment_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_treatment_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_treatment_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt_tran<T extends sub_treatment_types$receipt_tranArgs<ExtArgs> = {}>(args?: Subset<T, sub_treatment_types$receipt_tranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receipt_tranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    treatment_types<T extends treatment_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, treatment_typesDefaultArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sub_treatment_types model
   */
  interface sub_treatment_typesFieldRefs {
    readonly sub_treatment_type_id: FieldRef<"sub_treatment_types", 'Int'>
    readonly sub_treatment_type_name: FieldRef<"sub_treatment_types", 'String'>
    readonly treatment_type_id: FieldRef<"sub_treatment_types", 'Int'>
    readonly rate: FieldRef<"sub_treatment_types", 'Decimal'>
    readonly is_active: FieldRef<"sub_treatment_types", 'Boolean'>
    readonly description: FieldRef<"sub_treatment_types", 'String'>
    readonly user_id: FieldRef<"sub_treatment_types", 'Int'>
    readonly created: FieldRef<"sub_treatment_types", 'DateTime'>
    readonly modified: FieldRef<"sub_treatment_types", 'DateTime'>
    readonly account_id: FieldRef<"sub_treatment_types", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sub_treatment_types findUnique
   */
  export type sub_treatment_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which sub_treatment_types to fetch.
     */
    where: sub_treatment_typesWhereUniqueInput
  }

  /**
   * sub_treatment_types findUniqueOrThrow
   */
  export type sub_treatment_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which sub_treatment_types to fetch.
     */
    where: sub_treatment_typesWhereUniqueInput
  }

  /**
   * sub_treatment_types findFirst
   */
  export type sub_treatment_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which sub_treatment_types to fetch.
     */
    where?: sub_treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_treatment_types to fetch.
     */
    orderBy?: sub_treatment_typesOrderByWithRelationInput | sub_treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_treatment_types.
     */
    cursor?: sub_treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_treatment_types.
     */
    distinct?: Sub_treatment_typesScalarFieldEnum | Sub_treatment_typesScalarFieldEnum[]
  }

  /**
   * sub_treatment_types findFirstOrThrow
   */
  export type sub_treatment_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which sub_treatment_types to fetch.
     */
    where?: sub_treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_treatment_types to fetch.
     */
    orderBy?: sub_treatment_typesOrderByWithRelationInput | sub_treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_treatment_types.
     */
    cursor?: sub_treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_treatment_types.
     */
    distinct?: Sub_treatment_typesScalarFieldEnum | Sub_treatment_typesScalarFieldEnum[]
  }

  /**
   * sub_treatment_types findMany
   */
  export type sub_treatment_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which sub_treatment_types to fetch.
     */
    where?: sub_treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_treatment_types to fetch.
     */
    orderBy?: sub_treatment_typesOrderByWithRelationInput | sub_treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_treatment_types.
     */
    cursor?: sub_treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_treatment_types.
     */
    skip?: number
    distinct?: Sub_treatment_typesScalarFieldEnum | Sub_treatment_typesScalarFieldEnum[]
  }

  /**
   * sub_treatment_types create
   */
  export type sub_treatment_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_treatment_types.
     */
    data: XOR<sub_treatment_typesCreateInput, sub_treatment_typesUncheckedCreateInput>
  }

  /**
   * sub_treatment_types createMany
   */
  export type sub_treatment_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_treatment_types.
     */
    data: sub_treatment_typesCreateManyInput | sub_treatment_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_treatment_types createManyAndReturn
   */
  export type sub_treatment_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * The data used to create many sub_treatment_types.
     */
    data: sub_treatment_typesCreateManyInput | sub_treatment_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sub_treatment_types update
   */
  export type sub_treatment_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_treatment_types.
     */
    data: XOR<sub_treatment_typesUpdateInput, sub_treatment_typesUncheckedUpdateInput>
    /**
     * Choose, which sub_treatment_types to update.
     */
    where: sub_treatment_typesWhereUniqueInput
  }

  /**
   * sub_treatment_types updateMany
   */
  export type sub_treatment_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_treatment_types.
     */
    data: XOR<sub_treatment_typesUpdateManyMutationInput, sub_treatment_typesUncheckedUpdateManyInput>
    /**
     * Filter which sub_treatment_types to update
     */
    where?: sub_treatment_typesWhereInput
    /**
     * Limit how many sub_treatment_types to update.
     */
    limit?: number
  }

  /**
   * sub_treatment_types updateManyAndReturn
   */
  export type sub_treatment_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * The data used to update sub_treatment_types.
     */
    data: XOR<sub_treatment_typesUpdateManyMutationInput, sub_treatment_typesUncheckedUpdateManyInput>
    /**
     * Filter which sub_treatment_types to update
     */
    where?: sub_treatment_typesWhereInput
    /**
     * Limit how many sub_treatment_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sub_treatment_types upsert
   */
  export type sub_treatment_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_treatment_types to update in case it exists.
     */
    where: sub_treatment_typesWhereUniqueInput
    /**
     * In case the sub_treatment_types found by the `where` argument doesn't exist, create a new sub_treatment_types with this data.
     */
    create: XOR<sub_treatment_typesCreateInput, sub_treatment_typesUncheckedCreateInput>
    /**
     * In case the sub_treatment_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_treatment_typesUpdateInput, sub_treatment_typesUncheckedUpdateInput>
  }

  /**
   * sub_treatment_types delete
   */
  export type sub_treatment_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    /**
     * Filter which sub_treatment_types to delete.
     */
    where: sub_treatment_typesWhereUniqueInput
  }

  /**
   * sub_treatment_types deleteMany
   */
  export type sub_treatment_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_treatment_types to delete
     */
    where?: sub_treatment_typesWhereInput
    /**
     * Limit how many sub_treatment_types to delete.
     */
    limit?: number
  }

  /**
   * sub_treatment_types.receipt_tran
   */
  export type sub_treatment_types$receipt_tranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt_tran
     */
    select?: receipt_tranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt_tran
     */
    omit?: receipt_tranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receipt_tranInclude<ExtArgs> | null
    where?: receipt_tranWhereInput
    orderBy?: receipt_tranOrderByWithRelationInput | receipt_tranOrderByWithRelationInput[]
    cursor?: receipt_tranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Receipt_tranScalarFieldEnum | Receipt_tranScalarFieldEnum[]
  }

  /**
   * sub_treatment_types without action
   */
  export type sub_treatment_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
  }


  /**
   * Model treatment_types
   */

  export type AggregateTreatment_types = {
    _count: Treatment_typesCountAggregateOutputType | null
    _avg: Treatment_typesAvgAggregateOutputType | null
    _sum: Treatment_typesSumAggregateOutputType | null
    _min: Treatment_typesMinAggregateOutputType | null
    _max: Treatment_typesMaxAggregateOutputType | null
  }

  export type Treatment_typesAvgAggregateOutputType = {
    treatment_type_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type Treatment_typesSumAggregateOutputType = {
    treatment_type_id: number | null
    hospital_id: number | null
    user_id: number | null
  }

  export type Treatment_typesMinAggregateOutputType = {
    treatment_type_id: number | null
    treatment_type_name: string | null
    treatment_type_short_name: string | null
    hospital_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Treatment_typesMaxAggregateOutputType = {
    treatment_type_id: number | null
    treatment_type_name: string | null
    treatment_type_short_name: string | null
    hospital_id: number | null
    description: string | null
    user_id: number | null
    created: Date | null
    modified: Date | null
  }

  export type Treatment_typesCountAggregateOutputType = {
    treatment_type_id: number
    treatment_type_name: number
    treatment_type_short_name: number
    hospital_id: number
    description: number
    user_id: number
    created: number
    modified: number
    _all: number
  }


  export type Treatment_typesAvgAggregateInputType = {
    treatment_type_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type Treatment_typesSumAggregateInputType = {
    treatment_type_id?: true
    hospital_id?: true
    user_id?: true
  }

  export type Treatment_typesMinAggregateInputType = {
    treatment_type_id?: true
    treatment_type_name?: true
    treatment_type_short_name?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Treatment_typesMaxAggregateInputType = {
    treatment_type_id?: true
    treatment_type_name?: true
    treatment_type_short_name?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
  }

  export type Treatment_typesCountAggregateInputType = {
    treatment_type_id?: true
    treatment_type_name?: true
    treatment_type_short_name?: true
    hospital_id?: true
    description?: true
    user_id?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type Treatment_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treatment_types to aggregate.
     */
    where?: treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treatment_types to fetch.
     */
    orderBy?: treatment_typesOrderByWithRelationInput | treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned treatment_types
    **/
    _count?: true | Treatment_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Treatment_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Treatment_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Treatment_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Treatment_typesMaxAggregateInputType
  }

  export type GetTreatment_typesAggregateType<T extends Treatment_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatment_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatment_types[P]>
      : GetScalarType<T[P], AggregateTreatment_types[P]>
  }




  export type treatment_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: treatment_typesWhereInput
    orderBy?: treatment_typesOrderByWithAggregationInput | treatment_typesOrderByWithAggregationInput[]
    by: Treatment_typesScalarFieldEnum[] | Treatment_typesScalarFieldEnum
    having?: treatment_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Treatment_typesCountAggregateInputType | true
    _avg?: Treatment_typesAvgAggregateInputType
    _sum?: Treatment_typesSumAggregateInputType
    _min?: Treatment_typesMinAggregateInputType
    _max?: Treatment_typesMaxAggregateInputType
  }

  export type Treatment_typesGroupByOutputType = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name: string | null
    hospital_id: number
    description: string | null
    user_id: number
    created: Date
    modified: Date
    _count: Treatment_typesCountAggregateOutputType | null
    _avg: Treatment_typesAvgAggregateOutputType | null
    _sum: Treatment_typesSumAggregateOutputType | null
    _min: Treatment_typesMinAggregateOutputType | null
    _max: Treatment_typesMaxAggregateOutputType | null
  }

  type GetTreatment_typesGroupByPayload<T extends treatment_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Treatment_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Treatment_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Treatment_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Treatment_typesGroupByOutputType[P]>
        }
      >
    >


  export type treatment_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    treatment_type_id?: boolean
    treatment_type_name?: boolean
    treatment_type_short_name?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    sub_treatment_types?: boolean | treatment_types$sub_treatment_typesArgs<ExtArgs>
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    _count?: boolean | Treatment_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment_types"]>

  export type treatment_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    treatment_type_id?: boolean
    treatment_type_name?: boolean
    treatment_type_short_name?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment_types"]>

  export type treatment_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    treatment_type_id?: boolean
    treatment_type_name?: boolean
    treatment_type_short_name?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment_types"]>

  export type treatment_typesSelectScalar = {
    treatment_type_id?: boolean
    treatment_type_name?: boolean
    treatment_type_short_name?: boolean
    hospital_id?: boolean
    description?: boolean
    user_id?: boolean
    created?: boolean
    modified?: boolean
  }

  export type treatment_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"treatment_type_id" | "treatment_type_name" | "treatment_type_short_name" | "hospital_id" | "description" | "user_id" | "created" | "modified", ExtArgs["result"]["treatment_types"]>
  export type treatment_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_treatment_types?: boolean | treatment_types$sub_treatment_typesArgs<ExtArgs>
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    _count?: boolean | Treatment_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type treatment_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }
  export type treatment_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
  }

  export type $treatment_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "treatment_types"
    objects: {
      sub_treatment_types: Prisma.$sub_treatment_typesPayload<ExtArgs>[]
      hospitals: Prisma.$hospitalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      treatment_type_id: number
      treatment_type_name: string
      treatment_type_short_name: string | null
      hospital_id: number
      description: string | null
      user_id: number
      created: Date
      modified: Date
    }, ExtArgs["result"]["treatment_types"]>
    composites: {}
  }

  type treatment_typesGetPayload<S extends boolean | null | undefined | treatment_typesDefaultArgs> = $Result.GetResult<Prisma.$treatment_typesPayload, S>

  type treatment_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<treatment_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Treatment_typesCountAggregateInputType | true
    }

  export interface treatment_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['treatment_types'], meta: { name: 'treatment_types' } }
    /**
     * Find zero or one Treatment_types that matches the filter.
     * @param {treatment_typesFindUniqueArgs} args - Arguments to find a Treatment_types
     * @example
     * // Get one Treatment_types
     * const treatment_types = await prisma.treatment_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends treatment_typesFindUniqueArgs>(args: SelectSubset<T, treatment_typesFindUniqueArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treatment_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {treatment_typesFindUniqueOrThrowArgs} args - Arguments to find a Treatment_types
     * @example
     * // Get one Treatment_types
     * const treatment_types = await prisma.treatment_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends treatment_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, treatment_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesFindFirstArgs} args - Arguments to find a Treatment_types
     * @example
     * // Get one Treatment_types
     * const treatment_types = await prisma.treatment_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends treatment_typesFindFirstArgs>(args?: SelectSubset<T, treatment_typesFindFirstArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesFindFirstOrThrowArgs} args - Arguments to find a Treatment_types
     * @example
     * // Get one Treatment_types
     * const treatment_types = await prisma.treatment_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends treatment_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, treatment_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treatment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treatment_types
     * const treatment_types = await prisma.treatment_types.findMany()
     * 
     * // Get first 10 Treatment_types
     * const treatment_types = await prisma.treatment_types.findMany({ take: 10 })
     * 
     * // Only select the `treatment_type_id`
     * const treatment_typesWithTreatment_type_idOnly = await prisma.treatment_types.findMany({ select: { treatment_type_id: true } })
     * 
     */
    findMany<T extends treatment_typesFindManyArgs>(args?: SelectSubset<T, treatment_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treatment_types.
     * @param {treatment_typesCreateArgs} args - Arguments to create a Treatment_types.
     * @example
     * // Create one Treatment_types
     * const Treatment_types = await prisma.treatment_types.create({
     *   data: {
     *     // ... data to create a Treatment_types
     *   }
     * })
     * 
     */
    create<T extends treatment_typesCreateArgs>(args: SelectSubset<T, treatment_typesCreateArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treatment_types.
     * @param {treatment_typesCreateManyArgs} args - Arguments to create many Treatment_types.
     * @example
     * // Create many Treatment_types
     * const treatment_types = await prisma.treatment_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends treatment_typesCreateManyArgs>(args?: SelectSubset<T, treatment_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treatment_types and returns the data saved in the database.
     * @param {treatment_typesCreateManyAndReturnArgs} args - Arguments to create many Treatment_types.
     * @example
     * // Create many Treatment_types
     * const treatment_types = await prisma.treatment_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treatment_types and only return the `treatment_type_id`
     * const treatment_typesWithTreatment_type_idOnly = await prisma.treatment_types.createManyAndReturn({
     *   select: { treatment_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends treatment_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, treatment_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Treatment_types.
     * @param {treatment_typesDeleteArgs} args - Arguments to delete one Treatment_types.
     * @example
     * // Delete one Treatment_types
     * const Treatment_types = await prisma.treatment_types.delete({
     *   where: {
     *     // ... filter to delete one Treatment_types
     *   }
     * })
     * 
     */
    delete<T extends treatment_typesDeleteArgs>(args: SelectSubset<T, treatment_typesDeleteArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treatment_types.
     * @param {treatment_typesUpdateArgs} args - Arguments to update one Treatment_types.
     * @example
     * // Update one Treatment_types
     * const treatment_types = await prisma.treatment_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends treatment_typesUpdateArgs>(args: SelectSubset<T, treatment_typesUpdateArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treatment_types.
     * @param {treatment_typesDeleteManyArgs} args - Arguments to filter Treatment_types to delete.
     * @example
     * // Delete a few Treatment_types
     * const { count } = await prisma.treatment_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends treatment_typesDeleteManyArgs>(args?: SelectSubset<T, treatment_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treatment_types
     * const treatment_types = await prisma.treatment_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends treatment_typesUpdateManyArgs>(args: SelectSubset<T, treatment_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatment_types and returns the data updated in the database.
     * @param {treatment_typesUpdateManyAndReturnArgs} args - Arguments to update many Treatment_types.
     * @example
     * // Update many Treatment_types
     * const treatment_types = await prisma.treatment_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Treatment_types and only return the `treatment_type_id`
     * const treatment_typesWithTreatment_type_idOnly = await prisma.treatment_types.updateManyAndReturn({
     *   select: { treatment_type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends treatment_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, treatment_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Treatment_types.
     * @param {treatment_typesUpsertArgs} args - Arguments to update or create a Treatment_types.
     * @example
     * // Update or create a Treatment_types
     * const treatment_types = await prisma.treatment_types.upsert({
     *   create: {
     *     // ... data to create a Treatment_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treatment_types we want to update
     *   }
     * })
     */
    upsert<T extends treatment_typesUpsertArgs>(args: SelectSubset<T, treatment_typesUpsertArgs<ExtArgs>>): Prisma__treatment_typesClient<$Result.GetResult<Prisma.$treatment_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesCountArgs} args - Arguments to filter Treatment_types to count.
     * @example
     * // Count the number of Treatment_types
     * const count = await prisma.treatment_types.count({
     *   where: {
     *     // ... the filter for the Treatment_types we want to count
     *   }
     * })
    **/
    count<T extends treatment_typesCountArgs>(
      args?: Subset<T, treatment_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Treatment_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Treatment_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Treatment_typesAggregateArgs>(args: Subset<T, Treatment_typesAggregateArgs>): Prisma.PrismaPromise<GetTreatment_typesAggregateType<T>>

    /**
     * Group by Treatment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {treatment_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends treatment_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: treatment_typesGroupByArgs['orderBy'] }
        : { orderBy?: treatment_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, treatment_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatment_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the treatment_types model
   */
  readonly fields: treatment_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for treatment_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__treatment_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sub_treatment_types<T extends treatment_types$sub_treatment_typesArgs<ExtArgs> = {}>(args?: Subset<T, treatment_types$sub_treatment_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_treatment_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospitals<T extends hospitalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalsDefaultArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the treatment_types model
   */
  interface treatment_typesFieldRefs {
    readonly treatment_type_id: FieldRef<"treatment_types", 'Int'>
    readonly treatment_type_name: FieldRef<"treatment_types", 'String'>
    readonly treatment_type_short_name: FieldRef<"treatment_types", 'String'>
    readonly hospital_id: FieldRef<"treatment_types", 'Int'>
    readonly description: FieldRef<"treatment_types", 'String'>
    readonly user_id: FieldRef<"treatment_types", 'Int'>
    readonly created: FieldRef<"treatment_types", 'DateTime'>
    readonly modified: FieldRef<"treatment_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * treatment_types findUnique
   */
  export type treatment_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which treatment_types to fetch.
     */
    where: treatment_typesWhereUniqueInput
  }

  /**
   * treatment_types findUniqueOrThrow
   */
  export type treatment_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which treatment_types to fetch.
     */
    where: treatment_typesWhereUniqueInput
  }

  /**
   * treatment_types findFirst
   */
  export type treatment_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which treatment_types to fetch.
     */
    where?: treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treatment_types to fetch.
     */
    orderBy?: treatment_typesOrderByWithRelationInput | treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treatment_types.
     */
    cursor?: treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treatment_types.
     */
    distinct?: Treatment_typesScalarFieldEnum | Treatment_typesScalarFieldEnum[]
  }

  /**
   * treatment_types findFirstOrThrow
   */
  export type treatment_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which treatment_types to fetch.
     */
    where?: treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treatment_types to fetch.
     */
    orderBy?: treatment_typesOrderByWithRelationInput | treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for treatment_types.
     */
    cursor?: treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treatment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of treatment_types.
     */
    distinct?: Treatment_typesScalarFieldEnum | Treatment_typesScalarFieldEnum[]
  }

  /**
   * treatment_types findMany
   */
  export type treatment_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter, which treatment_types to fetch.
     */
    where?: treatment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of treatment_types to fetch.
     */
    orderBy?: treatment_typesOrderByWithRelationInput | treatment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing treatment_types.
     */
    cursor?: treatment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` treatment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` treatment_types.
     */
    skip?: number
    distinct?: Treatment_typesScalarFieldEnum | Treatment_typesScalarFieldEnum[]
  }

  /**
   * treatment_types create
   */
  export type treatment_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a treatment_types.
     */
    data: XOR<treatment_typesCreateInput, treatment_typesUncheckedCreateInput>
  }

  /**
   * treatment_types createMany
   */
  export type treatment_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many treatment_types.
     */
    data: treatment_typesCreateManyInput | treatment_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * treatment_types createManyAndReturn
   */
  export type treatment_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * The data used to create many treatment_types.
     */
    data: treatment_typesCreateManyInput | treatment_typesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * treatment_types update
   */
  export type treatment_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a treatment_types.
     */
    data: XOR<treatment_typesUpdateInput, treatment_typesUncheckedUpdateInput>
    /**
     * Choose, which treatment_types to update.
     */
    where: treatment_typesWhereUniqueInput
  }

  /**
   * treatment_types updateMany
   */
  export type treatment_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update treatment_types.
     */
    data: XOR<treatment_typesUpdateManyMutationInput, treatment_typesUncheckedUpdateManyInput>
    /**
     * Filter which treatment_types to update
     */
    where?: treatment_typesWhereInput
    /**
     * Limit how many treatment_types to update.
     */
    limit?: number
  }

  /**
   * treatment_types updateManyAndReturn
   */
  export type treatment_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * The data used to update treatment_types.
     */
    data: XOR<treatment_typesUpdateManyMutationInput, treatment_typesUncheckedUpdateManyInput>
    /**
     * Filter which treatment_types to update
     */
    where?: treatment_typesWhereInput
    /**
     * Limit how many treatment_types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * treatment_types upsert
   */
  export type treatment_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the treatment_types to update in case it exists.
     */
    where: treatment_typesWhereUniqueInput
    /**
     * In case the treatment_types found by the `where` argument doesn't exist, create a new treatment_types with this data.
     */
    create: XOR<treatment_typesCreateInput, treatment_typesUncheckedCreateInput>
    /**
     * In case the treatment_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<treatment_typesUpdateInput, treatment_typesUncheckedUpdateInput>
  }

  /**
   * treatment_types delete
   */
  export type treatment_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
    /**
     * Filter which treatment_types to delete.
     */
    where: treatment_typesWhereUniqueInput
  }

  /**
   * treatment_types deleteMany
   */
  export type treatment_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which treatment_types to delete
     */
    where?: treatment_typesWhereInput
    /**
     * Limit how many treatment_types to delete.
     */
    limit?: number
  }

  /**
   * treatment_types.sub_treatment_types
   */
  export type treatment_types$sub_treatment_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_treatment_types
     */
    select?: sub_treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_treatment_types
     */
    omit?: sub_treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_treatment_typesInclude<ExtArgs> | null
    where?: sub_treatment_typesWhereInput
    orderBy?: sub_treatment_typesOrderByWithRelationInput | sub_treatment_typesOrderByWithRelationInput[]
    cursor?: sub_treatment_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_treatment_typesScalarFieldEnum | Sub_treatment_typesScalarFieldEnum[]
  }

  /**
   * treatment_types without action
   */
  export type treatment_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the treatment_types
     */
    select?: treatment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the treatment_types
     */
    omit?: treatment_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: treatment_typesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    user_type: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    user_type: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_type: number
    first_name: number
    last_name: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_type?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    user_type: string
    first_name: string
    last_name: string
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    user_type?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_type" | "first_name" | "last_name" | "email" | "password", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_type: string
      first_name: string
      last_name: string
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly user_type: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Diagnosis_typesScalarFieldEnum: {
    diagnosis_type_id: 'diagnosis_type_id',
    diagnosis_type_name: 'diagnosis_type_name',
    diagnosis_type_short_name: 'diagnosis_type_short_name',
    is_active: 'is_active',
    hospital_id: 'hospital_id',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified'
  };

  export type Diagnosis_typesScalarFieldEnum = (typeof Diagnosis_typesScalarFieldEnum)[keyof typeof Diagnosis_typesScalarFieldEnum]


  export const DoctorsScalarFieldEnum: {
    doctor_id: 'doctor_id',
    doctor_name: 'doctor_name',
    staff_id: 'staff_id',
    student_id: 'student_id',
    hospital_id: 'hospital_id',
    mobile_no: 'mobile_no',
    email: 'email',
    specialization: 'specialization',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const HospitalsScalarFieldEnum: {
    hospital_id: 'hospital_id',
    hospital_name: 'hospital_name',
    default_payment_mode_id: 'default_payment_mode_id',
    registration_charge: 'registration_charge',
    registration_validity_months: 'registration_validity_months',
    opening_date: 'opening_date',
    opening_patient_no: 'opening_patient_no',
    opening_opd_no: 'opening_opd_no',
    opening_receipt_no: 'opening_receipt_no',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified',
    address: 'address',
    is_rate_enable_in_receipt: 'is_rate_enable_in_receipt',
    is_registration_fee_enable_in_opd: 'is_registration_fee_enable_in_opd'
  };

  export type HospitalsScalarFieldEnum = (typeof HospitalsScalarFieldEnum)[keyof typeof HospitalsScalarFieldEnum]


  export const OpdScalarFieldEnum: {
    opd_id: 'opd_id',
    opd_no: 'opd_no',
    opd_datetime: 'opd_datetime',
    patient_id: 'patient_id',
    is_follow_up_case: 'is_follow_up_case',
    treated_by_doctor_id: 'treated_by_doctor_id',
    registration_fee: 'registration_fee',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified',
    old_opd_no: 'old_opd_no'
  };

  export type OpdScalarFieldEnum = (typeof OpdScalarFieldEnum)[keyof typeof OpdScalarFieldEnum]


  export const Opd_diagnosis_typesScalarFieldEnum: {
    opd_diagnosis_type_id: 'opd_diagnosis_type_id',
    opd_id: 'opd_id',
    diagnosis_type_id: 'diagnosis_type_id',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified'
  };

  export type Opd_diagnosis_typesScalarFieldEnum = (typeof Opd_diagnosis_typesScalarFieldEnum)[keyof typeof Opd_diagnosis_typesScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    patient_id: 'patient_id',
    patient_name: 'patient_name',
    patient_no: 'patient_no',
    registration_datetime: 'registration_datetime',
    age: 'age',
    blood_group: 'blood_group',
    gender: 'gender',
    occupation: 'occupation',
    address: 'address',
    hospital_id: 'hospital_id',
    state_id: 'state_id',
    city_id: 'city_id',
    pin_code: 'pin_code',
    mobile_no: 'mobile_no',
    referred_by: 'referred_by',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified',
    emergency_contact_no: 'emergency_contact_no'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const Receipt_tranScalarFieldEnum: {
    receipt_tran_id: 'receipt_tran_id',
    receipt_id: 'receipt_id',
    sub_treatment_type_id: 'sub_treatment_type_id',
    quantity: 'quantity',
    rate: 'rate',
    amount: 'amount',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified'
  };

  export type Receipt_tranScalarFieldEnum = (typeof Receipt_tranScalarFieldEnum)[keyof typeof Receipt_tranScalarFieldEnum]


  export const ReceiptsScalarFieldEnum: {
    receipt_id: 'receipt_id',
    receipt_no: 'receipt_no',
    receipt_date: 'receipt_date',
    opd_id: 'opd_id',
    amount_paid: 'amount_paid',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified',
    payment_mode_id: 'payment_mode_id',
    reference_no: 'reference_no',
    reference_date: 'reference_date',
    cancellation_datetime: 'cancellation_datetime',
    cancellation_by_user_id: 'cancellation_by_user_id',
    cancellation_remarks: 'cancellation_remarks'
  };

  export type ReceiptsScalarFieldEnum = (typeof ReceiptsScalarFieldEnum)[keyof typeof ReceiptsScalarFieldEnum]


  export const Sub_treatment_typesScalarFieldEnum: {
    sub_treatment_type_id: 'sub_treatment_type_id',
    sub_treatment_type_name: 'sub_treatment_type_name',
    treatment_type_id: 'treatment_type_id',
    rate: 'rate',
    is_active: 'is_active',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified',
    account_id: 'account_id'
  };

  export type Sub_treatment_typesScalarFieldEnum = (typeof Sub_treatment_typesScalarFieldEnum)[keyof typeof Sub_treatment_typesScalarFieldEnum]


  export const Treatment_typesScalarFieldEnum: {
    treatment_type_id: 'treatment_type_id',
    treatment_type_name: 'treatment_type_name',
    treatment_type_short_name: 'treatment_type_short_name',
    hospital_id: 'hospital_id',
    description: 'description',
    user_id: 'user_id',
    created: 'created',
    modified: 'modified'
  };

  export type Treatment_typesScalarFieldEnum = (typeof Treatment_typesScalarFieldEnum)[keyof typeof Treatment_typesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_type: 'user_type',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type diagnosis_typesWhereInput = {
    AND?: diagnosis_typesWhereInput | diagnosis_typesWhereInput[]
    OR?: diagnosis_typesWhereInput[]
    NOT?: diagnosis_typesWhereInput | diagnosis_typesWhereInput[]
    diagnosis_type_id?: IntFilter<"diagnosis_types"> | number
    diagnosis_type_name?: StringFilter<"diagnosis_types"> | string
    diagnosis_type_short_name?: StringNullableFilter<"diagnosis_types"> | string | null
    is_active?: BoolFilter<"diagnosis_types"> | boolean
    hospital_id?: IntFilter<"diagnosis_types"> | number
    description?: StringNullableFilter<"diagnosis_types"> | string | null
    user_id?: IntFilter<"diagnosis_types"> | number
    created?: DateTimeFilter<"diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"diagnosis_types"> | Date | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    opd_diagnosis_types?: Opd_diagnosis_typesListRelationFilter
  }

  export type diagnosis_typesOrderByWithRelationInput = {
    diagnosis_type_id?: SortOrder
    diagnosis_type_name?: SortOrder
    diagnosis_type_short_name?: SortOrderInput | SortOrder
    is_active?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    hospitals?: hospitalsOrderByWithRelationInput
    opd_diagnosis_types?: opd_diagnosis_typesOrderByRelationAggregateInput
  }

  export type diagnosis_typesWhereUniqueInput = Prisma.AtLeast<{
    diagnosis_type_id?: number
    AND?: diagnosis_typesWhereInput | diagnosis_typesWhereInput[]
    OR?: diagnosis_typesWhereInput[]
    NOT?: diagnosis_typesWhereInput | diagnosis_typesWhereInput[]
    diagnosis_type_name?: StringFilter<"diagnosis_types"> | string
    diagnosis_type_short_name?: StringNullableFilter<"diagnosis_types"> | string | null
    is_active?: BoolFilter<"diagnosis_types"> | boolean
    hospital_id?: IntFilter<"diagnosis_types"> | number
    description?: StringNullableFilter<"diagnosis_types"> | string | null
    user_id?: IntFilter<"diagnosis_types"> | number
    created?: DateTimeFilter<"diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"diagnosis_types"> | Date | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    opd_diagnosis_types?: Opd_diagnosis_typesListRelationFilter
  }, "diagnosis_type_id">

  export type diagnosis_typesOrderByWithAggregationInput = {
    diagnosis_type_id?: SortOrder
    diagnosis_type_name?: SortOrder
    diagnosis_type_short_name?: SortOrderInput | SortOrder
    is_active?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: diagnosis_typesCountOrderByAggregateInput
    _avg?: diagnosis_typesAvgOrderByAggregateInput
    _max?: diagnosis_typesMaxOrderByAggregateInput
    _min?: diagnosis_typesMinOrderByAggregateInput
    _sum?: diagnosis_typesSumOrderByAggregateInput
  }

  export type diagnosis_typesScalarWhereWithAggregatesInput = {
    AND?: diagnosis_typesScalarWhereWithAggregatesInput | diagnosis_typesScalarWhereWithAggregatesInput[]
    OR?: diagnosis_typesScalarWhereWithAggregatesInput[]
    NOT?: diagnosis_typesScalarWhereWithAggregatesInput | diagnosis_typesScalarWhereWithAggregatesInput[]
    diagnosis_type_id?: IntWithAggregatesFilter<"diagnosis_types"> | number
    diagnosis_type_name?: StringWithAggregatesFilter<"diagnosis_types"> | string
    diagnosis_type_short_name?: StringNullableWithAggregatesFilter<"diagnosis_types"> | string | null
    is_active?: BoolWithAggregatesFilter<"diagnosis_types"> | boolean
    hospital_id?: IntWithAggregatesFilter<"diagnosis_types"> | number
    description?: StringNullableWithAggregatesFilter<"diagnosis_types"> | string | null
    user_id?: IntWithAggregatesFilter<"diagnosis_types"> | number
    created?: DateTimeWithAggregatesFilter<"diagnosis_types"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"diagnosis_types"> | Date | string
  }

  export type doctorsWhereInput = {
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    doctor_id?: IntFilter<"doctors"> | number
    doctor_name?: StringFilter<"doctors"> | string
    staff_id?: IntNullableFilter<"doctors"> | number | null
    student_id?: IntNullableFilter<"doctors"> | number | null
    hospital_id?: IntFilter<"doctors"> | number
    mobile_no?: StringNullableFilter<"doctors"> | string | null
    email?: StringNullableFilter<"doctors"> | string | null
    specialization?: StringNullableFilter<"doctors"> | string | null
    description?: StringNullableFilter<"doctors"> | string | null
    user_id?: IntFilter<"doctors"> | number
    created?: DateTimeFilter<"doctors"> | Date | string
    modified?: DateTimeFilter<"doctors"> | Date | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    opd?: OpdListRelationFilter
  }

  export type doctorsOrderByWithRelationInput = {
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    student_id?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    mobile_no?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    hospitals?: hospitalsOrderByWithRelationInput
    opd?: opdOrderByRelationAggregateInput
  }

  export type doctorsWhereUniqueInput = Prisma.AtLeast<{
    doctor_id?: number
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    doctor_name?: StringFilter<"doctors"> | string
    staff_id?: IntNullableFilter<"doctors"> | number | null
    student_id?: IntNullableFilter<"doctors"> | number | null
    hospital_id?: IntFilter<"doctors"> | number
    mobile_no?: StringNullableFilter<"doctors"> | string | null
    email?: StringNullableFilter<"doctors"> | string | null
    specialization?: StringNullableFilter<"doctors"> | string | null
    description?: StringNullableFilter<"doctors"> | string | null
    user_id?: IntFilter<"doctors"> | number
    created?: DateTimeFilter<"doctors"> | Date | string
    modified?: DateTimeFilter<"doctors"> | Date | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    opd?: OpdListRelationFilter
  }, "doctor_id">

  export type doctorsOrderByWithAggregationInput = {
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    student_id?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    mobile_no?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: doctorsCountOrderByAggregateInput
    _avg?: doctorsAvgOrderByAggregateInput
    _max?: doctorsMaxOrderByAggregateInput
    _min?: doctorsMinOrderByAggregateInput
    _sum?: doctorsSumOrderByAggregateInput
  }

  export type doctorsScalarWhereWithAggregatesInput = {
    AND?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    OR?: doctorsScalarWhereWithAggregatesInput[]
    NOT?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    doctor_id?: IntWithAggregatesFilter<"doctors"> | number
    doctor_name?: StringWithAggregatesFilter<"doctors"> | string
    staff_id?: IntNullableWithAggregatesFilter<"doctors"> | number | null
    student_id?: IntNullableWithAggregatesFilter<"doctors"> | number | null
    hospital_id?: IntWithAggregatesFilter<"doctors"> | number
    mobile_no?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    email?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    description?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    user_id?: IntWithAggregatesFilter<"doctors"> | number
    created?: DateTimeWithAggregatesFilter<"doctors"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"doctors"> | Date | string
  }

  export type hospitalsWhereInput = {
    AND?: hospitalsWhereInput | hospitalsWhereInput[]
    OR?: hospitalsWhereInput[]
    NOT?: hospitalsWhereInput | hospitalsWhereInput[]
    hospital_id?: IntFilter<"hospitals"> | number
    hospital_name?: StringFilter<"hospitals"> | string
    default_payment_mode_id?: IntNullableFilter<"hospitals"> | number | null
    registration_charge?: DecimalNullableFilter<"hospitals"> | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: IntNullableFilter<"hospitals"> | number | null
    opening_date?: DateTimeFilter<"hospitals"> | Date | string
    opening_patient_no?: IntFilter<"hospitals"> | number
    opening_opd_no?: IntFilter<"hospitals"> | number
    opening_receipt_no?: IntFilter<"hospitals"> | number
    description?: StringNullableFilter<"hospitals"> | string | null
    user_id?: IntFilter<"hospitals"> | number
    created?: DateTimeFilter<"hospitals"> | Date | string
    modified?: DateTimeFilter<"hospitals"> | Date | string
    address?: StringNullableFilter<"hospitals"> | string | null
    is_rate_enable_in_receipt?: BoolNullableFilter<"hospitals"> | boolean | null
    is_registration_fee_enable_in_opd?: BoolNullableFilter<"hospitals"> | boolean | null
    diagnosis_types?: Diagnosis_typesListRelationFilter
    doctors?: DoctorsListRelationFilter
    patients?: PatientsListRelationFilter
    treatment_types?: Treatment_typesListRelationFilter
  }

  export type hospitalsOrderByWithRelationInput = {
    hospital_id?: SortOrder
    hospital_name?: SortOrder
    default_payment_mode_id?: SortOrderInput | SortOrder
    registration_charge?: SortOrderInput | SortOrder
    registration_validity_months?: SortOrderInput | SortOrder
    opening_date?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    address?: SortOrderInput | SortOrder
    is_rate_enable_in_receipt?: SortOrderInput | SortOrder
    is_registration_fee_enable_in_opd?: SortOrderInput | SortOrder
    diagnosis_types?: diagnosis_typesOrderByRelationAggregateInput
    doctors?: doctorsOrderByRelationAggregateInput
    patients?: patientsOrderByRelationAggregateInput
    treatment_types?: treatment_typesOrderByRelationAggregateInput
  }

  export type hospitalsWhereUniqueInput = Prisma.AtLeast<{
    hospital_id?: number
    AND?: hospitalsWhereInput | hospitalsWhereInput[]
    OR?: hospitalsWhereInput[]
    NOT?: hospitalsWhereInput | hospitalsWhereInput[]
    hospital_name?: StringFilter<"hospitals"> | string
    default_payment_mode_id?: IntNullableFilter<"hospitals"> | number | null
    registration_charge?: DecimalNullableFilter<"hospitals"> | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: IntNullableFilter<"hospitals"> | number | null
    opening_date?: DateTimeFilter<"hospitals"> | Date | string
    opening_patient_no?: IntFilter<"hospitals"> | number
    opening_opd_no?: IntFilter<"hospitals"> | number
    opening_receipt_no?: IntFilter<"hospitals"> | number
    description?: StringNullableFilter<"hospitals"> | string | null
    user_id?: IntFilter<"hospitals"> | number
    created?: DateTimeFilter<"hospitals"> | Date | string
    modified?: DateTimeFilter<"hospitals"> | Date | string
    address?: StringNullableFilter<"hospitals"> | string | null
    is_rate_enable_in_receipt?: BoolNullableFilter<"hospitals"> | boolean | null
    is_registration_fee_enable_in_opd?: BoolNullableFilter<"hospitals"> | boolean | null
    diagnosis_types?: Diagnosis_typesListRelationFilter
    doctors?: DoctorsListRelationFilter
    patients?: PatientsListRelationFilter
    treatment_types?: Treatment_typesListRelationFilter
  }, "hospital_id">

  export type hospitalsOrderByWithAggregationInput = {
    hospital_id?: SortOrder
    hospital_name?: SortOrder
    default_payment_mode_id?: SortOrderInput | SortOrder
    registration_charge?: SortOrderInput | SortOrder
    registration_validity_months?: SortOrderInput | SortOrder
    opening_date?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    address?: SortOrderInput | SortOrder
    is_rate_enable_in_receipt?: SortOrderInput | SortOrder
    is_registration_fee_enable_in_opd?: SortOrderInput | SortOrder
    _count?: hospitalsCountOrderByAggregateInput
    _avg?: hospitalsAvgOrderByAggregateInput
    _max?: hospitalsMaxOrderByAggregateInput
    _min?: hospitalsMinOrderByAggregateInput
    _sum?: hospitalsSumOrderByAggregateInput
  }

  export type hospitalsScalarWhereWithAggregatesInput = {
    AND?: hospitalsScalarWhereWithAggregatesInput | hospitalsScalarWhereWithAggregatesInput[]
    OR?: hospitalsScalarWhereWithAggregatesInput[]
    NOT?: hospitalsScalarWhereWithAggregatesInput | hospitalsScalarWhereWithAggregatesInput[]
    hospital_id?: IntWithAggregatesFilter<"hospitals"> | number
    hospital_name?: StringWithAggregatesFilter<"hospitals"> | string
    default_payment_mode_id?: IntNullableWithAggregatesFilter<"hospitals"> | number | null
    registration_charge?: DecimalNullableWithAggregatesFilter<"hospitals"> | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: IntNullableWithAggregatesFilter<"hospitals"> | number | null
    opening_date?: DateTimeWithAggregatesFilter<"hospitals"> | Date | string
    opening_patient_no?: IntWithAggregatesFilter<"hospitals"> | number
    opening_opd_no?: IntWithAggregatesFilter<"hospitals"> | number
    opening_receipt_no?: IntWithAggregatesFilter<"hospitals"> | number
    description?: StringNullableWithAggregatesFilter<"hospitals"> | string | null
    user_id?: IntWithAggregatesFilter<"hospitals"> | number
    created?: DateTimeWithAggregatesFilter<"hospitals"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"hospitals"> | Date | string
    address?: StringNullableWithAggregatesFilter<"hospitals"> | string | null
    is_rate_enable_in_receipt?: BoolNullableWithAggregatesFilter<"hospitals"> | boolean | null
    is_registration_fee_enable_in_opd?: BoolNullableWithAggregatesFilter<"hospitals"> | boolean | null
  }

  export type opdWhereInput = {
    AND?: opdWhereInput | opdWhereInput[]
    OR?: opdWhereInput[]
    NOT?: opdWhereInput | opdWhereInput[]
    opd_id?: IntFilter<"opd"> | number
    opd_no?: StringNullableFilter<"opd"> | string | null
    opd_datetime?: DateTimeFilter<"opd"> | Date | string
    patient_id?: IntFilter<"opd"> | number
    is_follow_up_case?: BoolFilter<"opd"> | boolean
    treated_by_doctor_id?: IntFilter<"opd"> | number
    registration_fee?: DecimalFilter<"opd"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"opd"> | string | null
    user_id?: IntFilter<"opd"> | number
    created?: DateTimeFilter<"opd"> | Date | string
    modified?: DateTimeFilter<"opd"> | Date | string
    old_opd_no?: StringNullableFilter<"opd"> | string | null
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
    patients?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    opd_diagnosis_types?: Opd_diagnosis_typesListRelationFilter
    receipts?: ReceiptsListRelationFilter
  }

  export type opdOrderByWithRelationInput = {
    opd_id?: SortOrder
    opd_no?: SortOrderInput | SortOrder
    opd_datetime?: SortOrder
    patient_id?: SortOrder
    is_follow_up_case?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    old_opd_no?: SortOrderInput | SortOrder
    doctors?: doctorsOrderByWithRelationInput
    patients?: patientsOrderByWithRelationInput
    opd_diagnosis_types?: opd_diagnosis_typesOrderByRelationAggregateInput
    receipts?: receiptsOrderByRelationAggregateInput
  }

  export type opdWhereUniqueInput = Prisma.AtLeast<{
    opd_id?: number
    AND?: opdWhereInput | opdWhereInput[]
    OR?: opdWhereInput[]
    NOT?: opdWhereInput | opdWhereInput[]
    opd_no?: StringNullableFilter<"opd"> | string | null
    opd_datetime?: DateTimeFilter<"opd"> | Date | string
    patient_id?: IntFilter<"opd"> | number
    is_follow_up_case?: BoolFilter<"opd"> | boolean
    treated_by_doctor_id?: IntFilter<"opd"> | number
    registration_fee?: DecimalFilter<"opd"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"opd"> | string | null
    user_id?: IntFilter<"opd"> | number
    created?: DateTimeFilter<"opd"> | Date | string
    modified?: DateTimeFilter<"opd"> | Date | string
    old_opd_no?: StringNullableFilter<"opd"> | string | null
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
    patients?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    opd_diagnosis_types?: Opd_diagnosis_typesListRelationFilter
    receipts?: ReceiptsListRelationFilter
  }, "opd_id">

  export type opdOrderByWithAggregationInput = {
    opd_id?: SortOrder
    opd_no?: SortOrderInput | SortOrder
    opd_datetime?: SortOrder
    patient_id?: SortOrder
    is_follow_up_case?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    old_opd_no?: SortOrderInput | SortOrder
    _count?: opdCountOrderByAggregateInput
    _avg?: opdAvgOrderByAggregateInput
    _max?: opdMaxOrderByAggregateInput
    _min?: opdMinOrderByAggregateInput
    _sum?: opdSumOrderByAggregateInput
  }

  export type opdScalarWhereWithAggregatesInput = {
    AND?: opdScalarWhereWithAggregatesInput | opdScalarWhereWithAggregatesInput[]
    OR?: opdScalarWhereWithAggregatesInput[]
    NOT?: opdScalarWhereWithAggregatesInput | opdScalarWhereWithAggregatesInput[]
    opd_id?: IntWithAggregatesFilter<"opd"> | number
    opd_no?: StringNullableWithAggregatesFilter<"opd"> | string | null
    opd_datetime?: DateTimeWithAggregatesFilter<"opd"> | Date | string
    patient_id?: IntWithAggregatesFilter<"opd"> | number
    is_follow_up_case?: BoolWithAggregatesFilter<"opd"> | boolean
    treated_by_doctor_id?: IntWithAggregatesFilter<"opd"> | number
    registration_fee?: DecimalWithAggregatesFilter<"opd"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"opd"> | string | null
    user_id?: IntWithAggregatesFilter<"opd"> | number
    created?: DateTimeWithAggregatesFilter<"opd"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"opd"> | Date | string
    old_opd_no?: StringNullableWithAggregatesFilter<"opd"> | string | null
  }

  export type opd_diagnosis_typesWhereInput = {
    AND?: opd_diagnosis_typesWhereInput | opd_diagnosis_typesWhereInput[]
    OR?: opd_diagnosis_typesWhereInput[]
    NOT?: opd_diagnosis_typesWhereInput | opd_diagnosis_typesWhereInput[]
    opd_diagnosis_type_id?: IntFilter<"opd_diagnosis_types"> | number
    opd_id?: IntFilter<"opd_diagnosis_types"> | number
    diagnosis_type_id?: IntFilter<"opd_diagnosis_types"> | number
    description?: StringNullableFilter<"opd_diagnosis_types"> | string | null
    user_id?: IntFilter<"opd_diagnosis_types"> | number
    created?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
    diagnosis_types?: XOR<Diagnosis_typesScalarRelationFilter, diagnosis_typesWhereInput>
    opd?: XOR<OpdScalarRelationFilter, opdWhereInput>
  }

  export type opd_diagnosis_typesOrderByWithRelationInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    diagnosis_types?: diagnosis_typesOrderByWithRelationInput
    opd?: opdOrderByWithRelationInput
  }

  export type opd_diagnosis_typesWhereUniqueInput = Prisma.AtLeast<{
    opd_diagnosis_type_id?: number
    AND?: opd_diagnosis_typesWhereInput | opd_diagnosis_typesWhereInput[]
    OR?: opd_diagnosis_typesWhereInput[]
    NOT?: opd_diagnosis_typesWhereInput | opd_diagnosis_typesWhereInput[]
    opd_id?: IntFilter<"opd_diagnosis_types"> | number
    diagnosis_type_id?: IntFilter<"opd_diagnosis_types"> | number
    description?: StringNullableFilter<"opd_diagnosis_types"> | string | null
    user_id?: IntFilter<"opd_diagnosis_types"> | number
    created?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
    diagnosis_types?: XOR<Diagnosis_typesScalarRelationFilter, diagnosis_typesWhereInput>
    opd?: XOR<OpdScalarRelationFilter, opdWhereInput>
  }, "opd_diagnosis_type_id">

  export type opd_diagnosis_typesOrderByWithAggregationInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: opd_diagnosis_typesCountOrderByAggregateInput
    _avg?: opd_diagnosis_typesAvgOrderByAggregateInput
    _max?: opd_diagnosis_typesMaxOrderByAggregateInput
    _min?: opd_diagnosis_typesMinOrderByAggregateInput
    _sum?: opd_diagnosis_typesSumOrderByAggregateInput
  }

  export type opd_diagnosis_typesScalarWhereWithAggregatesInput = {
    AND?: opd_diagnosis_typesScalarWhereWithAggregatesInput | opd_diagnosis_typesScalarWhereWithAggregatesInput[]
    OR?: opd_diagnosis_typesScalarWhereWithAggregatesInput[]
    NOT?: opd_diagnosis_typesScalarWhereWithAggregatesInput | opd_diagnosis_typesScalarWhereWithAggregatesInput[]
    opd_diagnosis_type_id?: IntWithAggregatesFilter<"opd_diagnosis_types"> | number
    opd_id?: IntWithAggregatesFilter<"opd_diagnosis_types"> | number
    diagnosis_type_id?: IntWithAggregatesFilter<"opd_diagnosis_types"> | number
    description?: StringNullableWithAggregatesFilter<"opd_diagnosis_types"> | string | null
    user_id?: IntWithAggregatesFilter<"opd_diagnosis_types"> | number
    created?: DateTimeWithAggregatesFilter<"opd_diagnosis_types"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"opd_diagnosis_types"> | Date | string
  }

  export type patientsWhereInput = {
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    patient_id?: IntFilter<"patients"> | number
    patient_name?: StringFilter<"patients"> | string
    patient_no?: IntFilter<"patients"> | number
    registration_datetime?: DateTimeFilter<"patients"> | Date | string
    age?: IntNullableFilter<"patients"> | number | null
    blood_group?: StringNullableFilter<"patients"> | string | null
    gender?: StringFilter<"patients"> | string
    occupation?: StringNullableFilter<"patients"> | string | null
    address?: StringNullableFilter<"patients"> | string | null
    hospital_id?: IntFilter<"patients"> | number
    state_id?: IntNullableFilter<"patients"> | number | null
    city_id?: IntNullableFilter<"patients"> | number | null
    pin_code?: StringNullableFilter<"patients"> | string | null
    mobile_no?: StringFilter<"patients"> | string
    referred_by?: StringNullableFilter<"patients"> | string | null
    description?: StringNullableFilter<"patients"> | string | null
    user_id?: IntFilter<"patients"> | number
    created?: DateTimeFilter<"patients"> | Date | string
    modified?: DateTimeFilter<"patients"> | Date | string
    emergency_contact_no?: StringNullableFilter<"patients"> | string | null
    opd?: OpdListRelationFilter
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
  }

  export type patientsOrderByWithRelationInput = {
    patient_id?: SortOrder
    patient_name?: SortOrder
    patient_no?: SortOrder
    registration_datetime?: SortOrder
    age?: SortOrderInput | SortOrder
    blood_group?: SortOrderInput | SortOrder
    gender?: SortOrder
    occupation?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    pin_code?: SortOrderInput | SortOrder
    mobile_no?: SortOrder
    referred_by?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    emergency_contact_no?: SortOrderInput | SortOrder
    opd?: opdOrderByRelationAggregateInput
    hospitals?: hospitalsOrderByWithRelationInput
  }

  export type patientsWhereUniqueInput = Prisma.AtLeast<{
    patient_id?: number
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    patient_name?: StringFilter<"patients"> | string
    patient_no?: IntFilter<"patients"> | number
    registration_datetime?: DateTimeFilter<"patients"> | Date | string
    age?: IntNullableFilter<"patients"> | number | null
    blood_group?: StringNullableFilter<"patients"> | string | null
    gender?: StringFilter<"patients"> | string
    occupation?: StringNullableFilter<"patients"> | string | null
    address?: StringNullableFilter<"patients"> | string | null
    hospital_id?: IntFilter<"patients"> | number
    state_id?: IntNullableFilter<"patients"> | number | null
    city_id?: IntNullableFilter<"patients"> | number | null
    pin_code?: StringNullableFilter<"patients"> | string | null
    mobile_no?: StringFilter<"patients"> | string
    referred_by?: StringNullableFilter<"patients"> | string | null
    description?: StringNullableFilter<"patients"> | string | null
    user_id?: IntFilter<"patients"> | number
    created?: DateTimeFilter<"patients"> | Date | string
    modified?: DateTimeFilter<"patients"> | Date | string
    emergency_contact_no?: StringNullableFilter<"patients"> | string | null
    opd?: OpdListRelationFilter
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
  }, "patient_id">

  export type patientsOrderByWithAggregationInput = {
    patient_id?: SortOrder
    patient_name?: SortOrder
    patient_no?: SortOrder
    registration_datetime?: SortOrder
    age?: SortOrderInput | SortOrder
    blood_group?: SortOrderInput | SortOrder
    gender?: SortOrder
    occupation?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    pin_code?: SortOrderInput | SortOrder
    mobile_no?: SortOrder
    referred_by?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    emergency_contact_no?: SortOrderInput | SortOrder
    _count?: patientsCountOrderByAggregateInput
    _avg?: patientsAvgOrderByAggregateInput
    _max?: patientsMaxOrderByAggregateInput
    _min?: patientsMinOrderByAggregateInput
    _sum?: patientsSumOrderByAggregateInput
  }

  export type patientsScalarWhereWithAggregatesInput = {
    AND?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    OR?: patientsScalarWhereWithAggregatesInput[]
    NOT?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    patient_id?: IntWithAggregatesFilter<"patients"> | number
    patient_name?: StringWithAggregatesFilter<"patients"> | string
    patient_no?: IntWithAggregatesFilter<"patients"> | number
    registration_datetime?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    age?: IntNullableWithAggregatesFilter<"patients"> | number | null
    blood_group?: StringNullableWithAggregatesFilter<"patients"> | string | null
    gender?: StringWithAggregatesFilter<"patients"> | string
    occupation?: StringNullableWithAggregatesFilter<"patients"> | string | null
    address?: StringNullableWithAggregatesFilter<"patients"> | string | null
    hospital_id?: IntWithAggregatesFilter<"patients"> | number
    state_id?: IntNullableWithAggregatesFilter<"patients"> | number | null
    city_id?: IntNullableWithAggregatesFilter<"patients"> | number | null
    pin_code?: StringNullableWithAggregatesFilter<"patients"> | string | null
    mobile_no?: StringWithAggregatesFilter<"patients"> | string
    referred_by?: StringNullableWithAggregatesFilter<"patients"> | string | null
    description?: StringNullableWithAggregatesFilter<"patients"> | string | null
    user_id?: IntWithAggregatesFilter<"patients"> | number
    created?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    emergency_contact_no?: StringNullableWithAggregatesFilter<"patients"> | string | null
  }

  export type receipt_tranWhereInput = {
    AND?: receipt_tranWhereInput | receipt_tranWhereInput[]
    OR?: receipt_tranWhereInput[]
    NOT?: receipt_tranWhereInput | receipt_tranWhereInput[]
    receipt_tran_id?: IntFilter<"receipt_tran"> | number
    receipt_id?: IntFilter<"receipt_tran"> | number
    sub_treatment_type_id?: IntFilter<"receipt_tran"> | number
    quantity?: IntFilter<"receipt_tran"> | number
    rate?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipt_tran"> | string | null
    user_id?: IntFilter<"receipt_tran"> | number
    created?: DateTimeFilter<"receipt_tran"> | Date | string
    modified?: DateTimeFilter<"receipt_tran"> | Date | string
    sub_treatment_types?: XOR<Sub_treatment_typesScalarRelationFilter, sub_treatment_typesWhereInput>
    receipts?: XOR<ReceiptsScalarRelationFilter, receiptsWhereInput>
  }

  export type receipt_tranOrderByWithRelationInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    sub_treatment_types?: sub_treatment_typesOrderByWithRelationInput
    receipts?: receiptsOrderByWithRelationInput
  }

  export type receipt_tranWhereUniqueInput = Prisma.AtLeast<{
    receipt_tran_id?: number
    AND?: receipt_tranWhereInput | receipt_tranWhereInput[]
    OR?: receipt_tranWhereInput[]
    NOT?: receipt_tranWhereInput | receipt_tranWhereInput[]
    receipt_id?: IntFilter<"receipt_tran"> | number
    sub_treatment_type_id?: IntFilter<"receipt_tran"> | number
    quantity?: IntFilter<"receipt_tran"> | number
    rate?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipt_tran"> | string | null
    user_id?: IntFilter<"receipt_tran"> | number
    created?: DateTimeFilter<"receipt_tran"> | Date | string
    modified?: DateTimeFilter<"receipt_tran"> | Date | string
    sub_treatment_types?: XOR<Sub_treatment_typesScalarRelationFilter, sub_treatment_typesWhereInput>
    receipts?: XOR<ReceiptsScalarRelationFilter, receiptsWhereInput>
  }, "receipt_tran_id">

  export type receipt_tranOrderByWithAggregationInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: receipt_tranCountOrderByAggregateInput
    _avg?: receipt_tranAvgOrderByAggregateInput
    _max?: receipt_tranMaxOrderByAggregateInput
    _min?: receipt_tranMinOrderByAggregateInput
    _sum?: receipt_tranSumOrderByAggregateInput
  }

  export type receipt_tranScalarWhereWithAggregatesInput = {
    AND?: receipt_tranScalarWhereWithAggregatesInput | receipt_tranScalarWhereWithAggregatesInput[]
    OR?: receipt_tranScalarWhereWithAggregatesInput[]
    NOT?: receipt_tranScalarWhereWithAggregatesInput | receipt_tranScalarWhereWithAggregatesInput[]
    receipt_tran_id?: IntWithAggregatesFilter<"receipt_tran"> | number
    receipt_id?: IntWithAggregatesFilter<"receipt_tran"> | number
    sub_treatment_type_id?: IntWithAggregatesFilter<"receipt_tran"> | number
    quantity?: IntWithAggregatesFilter<"receipt_tran"> | number
    rate?: DecimalWithAggregatesFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"receipt_tran"> | string | null
    user_id?: IntWithAggregatesFilter<"receipt_tran"> | number
    created?: DateTimeWithAggregatesFilter<"receipt_tran"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"receipt_tran"> | Date | string
  }

  export type receiptsWhereInput = {
    AND?: receiptsWhereInput | receiptsWhereInput[]
    OR?: receiptsWhereInput[]
    NOT?: receiptsWhereInput | receiptsWhereInput[]
    receipt_id?: IntFilter<"receipts"> | number
    receipt_no?: StringNullableFilter<"receipts"> | string | null
    receipt_date?: DateTimeFilter<"receipts"> | Date | string
    opd_id?: IntFilter<"receipts"> | number
    amount_paid?: DecimalFilter<"receipts"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipts"> | string | null
    user_id?: IntFilter<"receipts"> | number
    created?: DateTimeFilter<"receipts"> | Date | string
    modified?: DateTimeFilter<"receipts"> | Date | string
    payment_mode_id?: IntFilter<"receipts"> | number
    reference_no?: StringNullableFilter<"receipts"> | string | null
    reference_date?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_datetime?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_by_user_id?: IntNullableFilter<"receipts"> | number | null
    cancellation_remarks?: StringNullableFilter<"receipts"> | string | null
    receipt_tran?: Receipt_tranListRelationFilter
    opd?: XOR<OpdScalarRelationFilter, opdWhereInput>
  }

  export type receiptsOrderByWithRelationInput = {
    receipt_id?: SortOrder
    receipt_no?: SortOrderInput | SortOrder
    receipt_date?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    payment_mode_id?: SortOrder
    reference_no?: SortOrderInput | SortOrder
    reference_date?: SortOrderInput | SortOrder
    cancellation_datetime?: SortOrderInput | SortOrder
    cancellation_by_user_id?: SortOrderInput | SortOrder
    cancellation_remarks?: SortOrderInput | SortOrder
    receipt_tran?: receipt_tranOrderByRelationAggregateInput
    opd?: opdOrderByWithRelationInput
  }

  export type receiptsWhereUniqueInput = Prisma.AtLeast<{
    receipt_id?: number
    AND?: receiptsWhereInput | receiptsWhereInput[]
    OR?: receiptsWhereInput[]
    NOT?: receiptsWhereInput | receiptsWhereInput[]
    receipt_no?: StringNullableFilter<"receipts"> | string | null
    receipt_date?: DateTimeFilter<"receipts"> | Date | string
    opd_id?: IntFilter<"receipts"> | number
    amount_paid?: DecimalFilter<"receipts"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipts"> | string | null
    user_id?: IntFilter<"receipts"> | number
    created?: DateTimeFilter<"receipts"> | Date | string
    modified?: DateTimeFilter<"receipts"> | Date | string
    payment_mode_id?: IntFilter<"receipts"> | number
    reference_no?: StringNullableFilter<"receipts"> | string | null
    reference_date?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_datetime?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_by_user_id?: IntNullableFilter<"receipts"> | number | null
    cancellation_remarks?: StringNullableFilter<"receipts"> | string | null
    receipt_tran?: Receipt_tranListRelationFilter
    opd?: XOR<OpdScalarRelationFilter, opdWhereInput>
  }, "receipt_id">

  export type receiptsOrderByWithAggregationInput = {
    receipt_id?: SortOrder
    receipt_no?: SortOrderInput | SortOrder
    receipt_date?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    payment_mode_id?: SortOrder
    reference_no?: SortOrderInput | SortOrder
    reference_date?: SortOrderInput | SortOrder
    cancellation_datetime?: SortOrderInput | SortOrder
    cancellation_by_user_id?: SortOrderInput | SortOrder
    cancellation_remarks?: SortOrderInput | SortOrder
    _count?: receiptsCountOrderByAggregateInput
    _avg?: receiptsAvgOrderByAggregateInput
    _max?: receiptsMaxOrderByAggregateInput
    _min?: receiptsMinOrderByAggregateInput
    _sum?: receiptsSumOrderByAggregateInput
  }

  export type receiptsScalarWhereWithAggregatesInput = {
    AND?: receiptsScalarWhereWithAggregatesInput | receiptsScalarWhereWithAggregatesInput[]
    OR?: receiptsScalarWhereWithAggregatesInput[]
    NOT?: receiptsScalarWhereWithAggregatesInput | receiptsScalarWhereWithAggregatesInput[]
    receipt_id?: IntWithAggregatesFilter<"receipts"> | number
    receipt_no?: StringNullableWithAggregatesFilter<"receipts"> | string | null
    receipt_date?: DateTimeWithAggregatesFilter<"receipts"> | Date | string
    opd_id?: IntWithAggregatesFilter<"receipts"> | number
    amount_paid?: DecimalWithAggregatesFilter<"receipts"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"receipts"> | string | null
    user_id?: IntWithAggregatesFilter<"receipts"> | number
    created?: DateTimeWithAggregatesFilter<"receipts"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"receipts"> | Date | string
    payment_mode_id?: IntWithAggregatesFilter<"receipts"> | number
    reference_no?: StringNullableWithAggregatesFilter<"receipts"> | string | null
    reference_date?: DateTimeNullableWithAggregatesFilter<"receipts"> | Date | string | null
    cancellation_datetime?: DateTimeNullableWithAggregatesFilter<"receipts"> | Date | string | null
    cancellation_by_user_id?: IntNullableWithAggregatesFilter<"receipts"> | number | null
    cancellation_remarks?: StringNullableWithAggregatesFilter<"receipts"> | string | null
  }

  export type sub_treatment_typesWhereInput = {
    AND?: sub_treatment_typesWhereInput | sub_treatment_typesWhereInput[]
    OR?: sub_treatment_typesWhereInput[]
    NOT?: sub_treatment_typesWhereInput | sub_treatment_typesWhereInput[]
    sub_treatment_type_id?: IntFilter<"sub_treatment_types"> | number
    sub_treatment_type_name?: StringFilter<"sub_treatment_types"> | string
    treatment_type_id?: IntFilter<"sub_treatment_types"> | number
    rate?: DecimalFilter<"sub_treatment_types"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"sub_treatment_types"> | boolean
    description?: StringNullableFilter<"sub_treatment_types"> | string | null
    user_id?: IntFilter<"sub_treatment_types"> | number
    created?: DateTimeFilter<"sub_treatment_types"> | Date | string
    modified?: DateTimeFilter<"sub_treatment_types"> | Date | string
    account_id?: IntNullableFilter<"sub_treatment_types"> | number | null
    receipt_tran?: Receipt_tranListRelationFilter
    treatment_types?: XOR<Treatment_typesScalarRelationFilter, treatment_typesWhereInput>
  }

  export type sub_treatment_typesOrderByWithRelationInput = {
    sub_treatment_type_id?: SortOrder
    sub_treatment_type_name?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    is_active?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    account_id?: SortOrderInput | SortOrder
    receipt_tran?: receipt_tranOrderByRelationAggregateInput
    treatment_types?: treatment_typesOrderByWithRelationInput
  }

  export type sub_treatment_typesWhereUniqueInput = Prisma.AtLeast<{
    sub_treatment_type_id?: number
    AND?: sub_treatment_typesWhereInput | sub_treatment_typesWhereInput[]
    OR?: sub_treatment_typesWhereInput[]
    NOT?: sub_treatment_typesWhereInput | sub_treatment_typesWhereInput[]
    sub_treatment_type_name?: StringFilter<"sub_treatment_types"> | string
    treatment_type_id?: IntFilter<"sub_treatment_types"> | number
    rate?: DecimalFilter<"sub_treatment_types"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"sub_treatment_types"> | boolean
    description?: StringNullableFilter<"sub_treatment_types"> | string | null
    user_id?: IntFilter<"sub_treatment_types"> | number
    created?: DateTimeFilter<"sub_treatment_types"> | Date | string
    modified?: DateTimeFilter<"sub_treatment_types"> | Date | string
    account_id?: IntNullableFilter<"sub_treatment_types"> | number | null
    receipt_tran?: Receipt_tranListRelationFilter
    treatment_types?: XOR<Treatment_typesScalarRelationFilter, treatment_typesWhereInput>
  }, "sub_treatment_type_id">

  export type sub_treatment_typesOrderByWithAggregationInput = {
    sub_treatment_type_id?: SortOrder
    sub_treatment_type_name?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    is_active?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    account_id?: SortOrderInput | SortOrder
    _count?: sub_treatment_typesCountOrderByAggregateInput
    _avg?: sub_treatment_typesAvgOrderByAggregateInput
    _max?: sub_treatment_typesMaxOrderByAggregateInput
    _min?: sub_treatment_typesMinOrderByAggregateInput
    _sum?: sub_treatment_typesSumOrderByAggregateInput
  }

  export type sub_treatment_typesScalarWhereWithAggregatesInput = {
    AND?: sub_treatment_typesScalarWhereWithAggregatesInput | sub_treatment_typesScalarWhereWithAggregatesInput[]
    OR?: sub_treatment_typesScalarWhereWithAggregatesInput[]
    NOT?: sub_treatment_typesScalarWhereWithAggregatesInput | sub_treatment_typesScalarWhereWithAggregatesInput[]
    sub_treatment_type_id?: IntWithAggregatesFilter<"sub_treatment_types"> | number
    sub_treatment_type_name?: StringWithAggregatesFilter<"sub_treatment_types"> | string
    treatment_type_id?: IntWithAggregatesFilter<"sub_treatment_types"> | number
    rate?: DecimalWithAggregatesFilter<"sub_treatment_types"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolWithAggregatesFilter<"sub_treatment_types"> | boolean
    description?: StringNullableWithAggregatesFilter<"sub_treatment_types"> | string | null
    user_id?: IntWithAggregatesFilter<"sub_treatment_types"> | number
    created?: DateTimeWithAggregatesFilter<"sub_treatment_types"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"sub_treatment_types"> | Date | string
    account_id?: IntNullableWithAggregatesFilter<"sub_treatment_types"> | number | null
  }

  export type treatment_typesWhereInput = {
    AND?: treatment_typesWhereInput | treatment_typesWhereInput[]
    OR?: treatment_typesWhereInput[]
    NOT?: treatment_typesWhereInput | treatment_typesWhereInput[]
    treatment_type_id?: IntFilter<"treatment_types"> | number
    treatment_type_name?: StringFilter<"treatment_types"> | string
    treatment_type_short_name?: StringNullableFilter<"treatment_types"> | string | null
    hospital_id?: IntFilter<"treatment_types"> | number
    description?: StringNullableFilter<"treatment_types"> | string | null
    user_id?: IntFilter<"treatment_types"> | number
    created?: DateTimeFilter<"treatment_types"> | Date | string
    modified?: DateTimeFilter<"treatment_types"> | Date | string
    sub_treatment_types?: Sub_treatment_typesListRelationFilter
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
  }

  export type treatment_typesOrderByWithRelationInput = {
    treatment_type_id?: SortOrder
    treatment_type_name?: SortOrder
    treatment_type_short_name?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    sub_treatment_types?: sub_treatment_typesOrderByRelationAggregateInput
    hospitals?: hospitalsOrderByWithRelationInput
  }

  export type treatment_typesWhereUniqueInput = Prisma.AtLeast<{
    treatment_type_id?: number
    AND?: treatment_typesWhereInput | treatment_typesWhereInput[]
    OR?: treatment_typesWhereInput[]
    NOT?: treatment_typesWhereInput | treatment_typesWhereInput[]
    treatment_type_name?: StringFilter<"treatment_types"> | string
    treatment_type_short_name?: StringNullableFilter<"treatment_types"> | string | null
    hospital_id?: IntFilter<"treatment_types"> | number
    description?: StringNullableFilter<"treatment_types"> | string | null
    user_id?: IntFilter<"treatment_types"> | number
    created?: DateTimeFilter<"treatment_types"> | Date | string
    modified?: DateTimeFilter<"treatment_types"> | Date | string
    sub_treatment_types?: Sub_treatment_typesListRelationFilter
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
  }, "treatment_type_id">

  export type treatment_typesOrderByWithAggregationInput = {
    treatment_type_id?: SortOrder
    treatment_type_name?: SortOrder
    treatment_type_short_name?: SortOrderInput | SortOrder
    hospital_id?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: treatment_typesCountOrderByAggregateInput
    _avg?: treatment_typesAvgOrderByAggregateInput
    _max?: treatment_typesMaxOrderByAggregateInput
    _min?: treatment_typesMinOrderByAggregateInput
    _sum?: treatment_typesSumOrderByAggregateInput
  }

  export type treatment_typesScalarWhereWithAggregatesInput = {
    AND?: treatment_typesScalarWhereWithAggregatesInput | treatment_typesScalarWhereWithAggregatesInput[]
    OR?: treatment_typesScalarWhereWithAggregatesInput[]
    NOT?: treatment_typesScalarWhereWithAggregatesInput | treatment_typesScalarWhereWithAggregatesInput[]
    treatment_type_id?: IntWithAggregatesFilter<"treatment_types"> | number
    treatment_type_name?: StringWithAggregatesFilter<"treatment_types"> | string
    treatment_type_short_name?: StringNullableWithAggregatesFilter<"treatment_types"> | string | null
    hospital_id?: IntWithAggregatesFilter<"treatment_types"> | number
    description?: StringNullableWithAggregatesFilter<"treatment_types"> | string | null
    user_id?: IntWithAggregatesFilter<"treatment_types"> | number
    created?: DateTimeWithAggregatesFilter<"treatment_types"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"treatment_types"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_type?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_type?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    user_type?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type diagnosis_typesCreateInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    hospitals: hospitalsCreateNestedOneWithoutDiagnosis_typesInput
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutDiagnosis_typesInput
  }

  export type diagnosis_typesUncheckedCreateInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutDiagnosis_typesInput
  }

  export type diagnosis_typesUpdateInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitals?: hospitalsUpdateOneRequiredWithoutDiagnosis_typesNestedInput
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutDiagnosis_typesNestedInput
  }

  export type diagnosis_typesUncheckedUpdateInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutDiagnosis_typesNestedInput
  }

  export type diagnosis_typesCreateManyInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type diagnosis_typesUpdateManyMutationInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosis_typesUncheckedUpdateManyInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsCreateInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    hospitals: hospitalsCreateNestedOneWithoutDoctorsInput
    opd?: opdCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    hospital_id: number
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd?: opdUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUpdateInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitals?: hospitalsUpdateOneRequiredWithoutDoctorsNestedInput
    opd?: opdUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd?: opdUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsCreateManyInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    hospital_id: number
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type doctorsUpdateManyMutationInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsUncheckedUpdateManyInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hospitalsCreateInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsCreateNestedManyWithoutHospitalsInput
    patients?: patientsCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesUncheckedCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsUncheckedCreateNestedManyWithoutHospitalsInput
    patients?: patientsUncheckedCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUpdateInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUncheckedUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUncheckedUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUncheckedUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsCreateManyInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
  }

  export type hospitalsUpdateManyMutationInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hospitalsUncheckedUpdateManyInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type opdCreateInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    doctors: doctorsCreateNestedOneWithoutOpdInput
    patients: patientsCreateNestedOneWithoutOpdInput
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutOpdInput
    receipts?: receiptsCreateNestedManyWithoutOpdInput
  }

  export type opdUncheckedCreateInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutOpdInput
    receipts?: receiptsUncheckedCreateNestedManyWithoutOpdInput
  }

  export type opdUpdateInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: doctorsUpdateOneRequiredWithoutOpdNestedInput
    patients?: patientsUpdateOneRequiredWithoutOpdNestedInput
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type opdCreateManyInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
  }

  export type opdUpdateManyMutationInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type opdUncheckedUpdateManyInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type opd_diagnosis_typesCreateInput = {
    opd_diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    diagnosis_types: diagnosis_typesCreateNestedOneWithoutOpd_diagnosis_typesInput
    opd: opdCreateNestedOneWithoutOpd_diagnosis_typesInput
  }

  export type opd_diagnosis_typesUncheckedCreateInput = {
    opd_diagnosis_type_id: number
    opd_id: number
    diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type opd_diagnosis_typesUpdateInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis_types?: diagnosis_typesUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput
    opd?: opdUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput
  }

  export type opd_diagnosis_typesUncheckedUpdateInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    opd_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opd_diagnosis_typesCreateManyInput = {
    opd_diagnosis_type_id: number
    opd_id: number
    diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type opd_diagnosis_typesUpdateManyMutationInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opd_diagnosis_typesUncheckedUpdateManyInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    opd_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsCreateInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
    opd?: opdCreateNestedManyWithoutPatientsInput
    hospitals: hospitalsCreateNestedOneWithoutPatientsInput
  }

  export type patientsUncheckedCreateInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    hospital_id: number
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
    opd?: opdUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type patientsUpdateInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd?: opdUpdateManyWithoutPatientsNestedInput
    hospitals?: hospitalsUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd?: opdUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type patientsCreateManyInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    hospital_id: number
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
  }

  export type patientsUpdateManyMutationInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patientsUncheckedUpdateManyInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receipt_tranCreateInput = {
    receipt_tran_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types: sub_treatment_typesCreateNestedOneWithoutReceipt_tranInput
    receipts: receiptsCreateNestedOneWithoutReceipt_tranInput
  }

  export type receipt_tranUncheckedCreateInput = {
    receipt_tran_id: number
    receipt_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranUpdateInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUpdateOneRequiredWithoutReceipt_tranNestedInput
    receipts?: receiptsUpdateOneRequiredWithoutReceipt_tranNestedInput
  }

  export type receipt_tranUncheckedUpdateInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    receipt_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receipt_tranCreateManyInput = {
    receipt_tran_id: number
    receipt_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranUpdateManyMutationInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receipt_tranUncheckedUpdateManyInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    receipt_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receiptsCreateInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
    receipt_tran?: receipt_tranCreateNestedManyWithoutReceiptsInput
    opd: opdCreateNestedOneWithoutReceiptsInput
  }

  export type receiptsUncheckedCreateInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    opd_id: number
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
    receipt_tran?: receipt_tranUncheckedCreateNestedManyWithoutReceiptsInput
  }

  export type receiptsUpdateInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_tran?: receipt_tranUpdateManyWithoutReceiptsNestedInput
    opd?: opdUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type receiptsUncheckedUpdateInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_id?: IntFieldUpdateOperationsInput | number
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_tran?: receipt_tranUncheckedUpdateManyWithoutReceiptsNestedInput
  }

  export type receiptsCreateManyInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    opd_id: number
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
  }

  export type receiptsUpdateManyMutationInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptsUncheckedUpdateManyInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_id?: IntFieldUpdateOperationsInput | number
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_treatment_typesCreateInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
    receipt_tran?: receipt_tranCreateNestedManyWithoutSub_treatment_typesInput
    treatment_types: treatment_typesCreateNestedOneWithoutSub_treatment_typesInput
  }

  export type sub_treatment_typesUncheckedCreateInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    treatment_type_id: number
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
    receipt_tran?: receipt_tranUncheckedCreateNestedManyWithoutSub_treatment_typesInput
  }

  export type sub_treatment_typesUpdateInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    receipt_tran?: receipt_tranUpdateManyWithoutSub_treatment_typesNestedInput
    treatment_types?: treatment_typesUpdateOneRequiredWithoutSub_treatment_typesNestedInput
  }

  export type sub_treatment_typesUncheckedUpdateInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    receipt_tran?: receipt_tranUncheckedUpdateManyWithoutSub_treatment_typesNestedInput
  }

  export type sub_treatment_typesCreateManyInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    treatment_type_id: number
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
  }

  export type sub_treatment_typesUpdateManyMutationInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sub_treatment_typesUncheckedUpdateManyInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type treatment_typesCreateInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types?: sub_treatment_typesCreateNestedManyWithoutTreatment_typesInput
    hospitals: hospitalsCreateNestedOneWithoutTreatment_typesInput
  }

  export type treatment_typesUncheckedCreateInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types?: sub_treatment_typesUncheckedCreateNestedManyWithoutTreatment_typesInput
  }

  export type treatment_typesUpdateInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUpdateManyWithoutTreatment_typesNestedInput
    hospitals?: hospitalsUpdateOneRequiredWithoutTreatment_typesNestedInput
  }

  export type treatment_typesUncheckedUpdateInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUncheckedUpdateManyWithoutTreatment_typesNestedInput
  }

  export type treatment_typesCreateManyInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type treatment_typesUpdateManyMutationInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type treatment_typesUncheckedUpdateManyInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    user_type: string
    first_name: string
    last_name: string
    email: string
    password: string
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    user_type: string
    first_name: string
    last_name: string
    email: string
    password: string
  }

  export type usersUpdateInput = {
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    user_id?: number
    user_type: string
    first_name: string
    last_name: string
    email: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HospitalsScalarRelationFilter = {
    is?: hospitalsWhereInput
    isNot?: hospitalsWhereInput
  }

  export type Opd_diagnosis_typesListRelationFilter = {
    every?: opd_diagnosis_typesWhereInput
    some?: opd_diagnosis_typesWhereInput
    none?: opd_diagnosis_typesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type opd_diagnosis_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type diagnosis_typesCountOrderByAggregateInput = {
    diagnosis_type_id?: SortOrder
    diagnosis_type_name?: SortOrder
    diagnosis_type_short_name?: SortOrder
    is_active?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type diagnosis_typesAvgOrderByAggregateInput = {
    diagnosis_type_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type diagnosis_typesMaxOrderByAggregateInput = {
    diagnosis_type_id?: SortOrder
    diagnosis_type_name?: SortOrder
    diagnosis_type_short_name?: SortOrder
    is_active?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type diagnosis_typesMinOrderByAggregateInput = {
    diagnosis_type_id?: SortOrder
    diagnosis_type_name?: SortOrder
    diagnosis_type_short_name?: SortOrder
    is_active?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type diagnosis_typesSumOrderByAggregateInput = {
    diagnosis_type_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OpdListRelationFilter = {
    every?: opdWhereInput
    some?: opdWhereInput
    none?: opdWhereInput
  }

  export type opdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorsCountOrderByAggregateInput = {
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    staff_id?: SortOrder
    student_id?: SortOrder
    hospital_id?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type doctorsAvgOrderByAggregateInput = {
    doctor_id?: SortOrder
    staff_id?: SortOrder
    student_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type doctorsMaxOrderByAggregateInput = {
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    staff_id?: SortOrder
    student_id?: SortOrder
    hospital_id?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type doctorsMinOrderByAggregateInput = {
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    staff_id?: SortOrder
    student_id?: SortOrder
    hospital_id?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type doctorsSumOrderByAggregateInput = {
    doctor_id?: SortOrder
    staff_id?: SortOrder
    student_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Diagnosis_typesListRelationFilter = {
    every?: diagnosis_typesWhereInput
    some?: diagnosis_typesWhereInput
    none?: diagnosis_typesWhereInput
  }

  export type DoctorsListRelationFilter = {
    every?: doctorsWhereInput
    some?: doctorsWhereInput
    none?: doctorsWhereInput
  }

  export type PatientsListRelationFilter = {
    every?: patientsWhereInput
    some?: patientsWhereInput
    none?: patientsWhereInput
  }

  export type Treatment_typesListRelationFilter = {
    every?: treatment_typesWhereInput
    some?: treatment_typesWhereInput
    none?: treatment_typesWhereInput
  }

  export type diagnosis_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type treatment_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hospitalsCountOrderByAggregateInput = {
    hospital_id?: SortOrder
    hospital_name?: SortOrder
    default_payment_mode_id?: SortOrder
    registration_charge?: SortOrder
    registration_validity_months?: SortOrder
    opening_date?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    address?: SortOrder
    is_rate_enable_in_receipt?: SortOrder
    is_registration_fee_enable_in_opd?: SortOrder
  }

  export type hospitalsAvgOrderByAggregateInput = {
    hospital_id?: SortOrder
    default_payment_mode_id?: SortOrder
    registration_charge?: SortOrder
    registration_validity_months?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    user_id?: SortOrder
  }

  export type hospitalsMaxOrderByAggregateInput = {
    hospital_id?: SortOrder
    hospital_name?: SortOrder
    default_payment_mode_id?: SortOrder
    registration_charge?: SortOrder
    registration_validity_months?: SortOrder
    opening_date?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    address?: SortOrder
    is_rate_enable_in_receipt?: SortOrder
    is_registration_fee_enable_in_opd?: SortOrder
  }

  export type hospitalsMinOrderByAggregateInput = {
    hospital_id?: SortOrder
    hospital_name?: SortOrder
    default_payment_mode_id?: SortOrder
    registration_charge?: SortOrder
    registration_validity_months?: SortOrder
    opening_date?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    address?: SortOrder
    is_rate_enable_in_receipt?: SortOrder
    is_registration_fee_enable_in_opd?: SortOrder
  }

  export type hospitalsSumOrderByAggregateInput = {
    hospital_id?: SortOrder
    default_payment_mode_id?: SortOrder
    registration_charge?: SortOrder
    registration_validity_months?: SortOrder
    opening_patient_no?: SortOrder
    opening_opd_no?: SortOrder
    opening_receipt_no?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DoctorsScalarRelationFilter = {
    is?: doctorsWhereInput
    isNot?: doctorsWhereInput
  }

  export type PatientsScalarRelationFilter = {
    is?: patientsWhereInput
    isNot?: patientsWhereInput
  }

  export type ReceiptsListRelationFilter = {
    every?: receiptsWhereInput
    some?: receiptsWhereInput
    none?: receiptsWhereInput
  }

  export type receiptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type opdCountOrderByAggregateInput = {
    opd_id?: SortOrder
    opd_no?: SortOrder
    opd_datetime?: SortOrder
    patient_id?: SortOrder
    is_follow_up_case?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    old_opd_no?: SortOrder
  }

  export type opdAvgOrderByAggregateInput = {
    opd_id?: SortOrder
    patient_id?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    user_id?: SortOrder
  }

  export type opdMaxOrderByAggregateInput = {
    opd_id?: SortOrder
    opd_no?: SortOrder
    opd_datetime?: SortOrder
    patient_id?: SortOrder
    is_follow_up_case?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    old_opd_no?: SortOrder
  }

  export type opdMinOrderByAggregateInput = {
    opd_id?: SortOrder
    opd_no?: SortOrder
    opd_datetime?: SortOrder
    patient_id?: SortOrder
    is_follow_up_case?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    old_opd_no?: SortOrder
  }

  export type opdSumOrderByAggregateInput = {
    opd_id?: SortOrder
    patient_id?: SortOrder
    treated_by_doctor_id?: SortOrder
    registration_fee?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Diagnosis_typesScalarRelationFilter = {
    is?: diagnosis_typesWhereInput
    isNot?: diagnosis_typesWhereInput
  }

  export type OpdScalarRelationFilter = {
    is?: opdWhereInput
    isNot?: opdWhereInput
  }

  export type opd_diagnosis_typesCountOrderByAggregateInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type opd_diagnosis_typesAvgOrderByAggregateInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type opd_diagnosis_typesMaxOrderByAggregateInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type opd_diagnosis_typesMinOrderByAggregateInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type opd_diagnosis_typesSumOrderByAggregateInput = {
    opd_diagnosis_type_id?: SortOrder
    opd_id?: SortOrder
    diagnosis_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type patientsCountOrderByAggregateInput = {
    patient_id?: SortOrder
    patient_name?: SortOrder
    patient_no?: SortOrder
    registration_datetime?: SortOrder
    age?: SortOrder
    blood_group?: SortOrder
    gender?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    pin_code?: SortOrder
    mobile_no?: SortOrder
    referred_by?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    emergency_contact_no?: SortOrder
  }

  export type patientsAvgOrderByAggregateInput = {
    patient_id?: SortOrder
    patient_no?: SortOrder
    age?: SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    user_id?: SortOrder
  }

  export type patientsMaxOrderByAggregateInput = {
    patient_id?: SortOrder
    patient_name?: SortOrder
    patient_no?: SortOrder
    registration_datetime?: SortOrder
    age?: SortOrder
    blood_group?: SortOrder
    gender?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    pin_code?: SortOrder
    mobile_no?: SortOrder
    referred_by?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    emergency_contact_no?: SortOrder
  }

  export type patientsMinOrderByAggregateInput = {
    patient_id?: SortOrder
    patient_name?: SortOrder
    patient_no?: SortOrder
    registration_datetime?: SortOrder
    age?: SortOrder
    blood_group?: SortOrder
    gender?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    pin_code?: SortOrder
    mobile_no?: SortOrder
    referred_by?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    emergency_contact_no?: SortOrder
  }

  export type patientsSumOrderByAggregateInput = {
    patient_id?: SortOrder
    patient_no?: SortOrder
    age?: SortOrder
    hospital_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    user_id?: SortOrder
  }

  export type Sub_treatment_typesScalarRelationFilter = {
    is?: sub_treatment_typesWhereInput
    isNot?: sub_treatment_typesWhereInput
  }

  export type ReceiptsScalarRelationFilter = {
    is?: receiptsWhereInput
    isNot?: receiptsWhereInput
  }

  export type receipt_tranCountOrderByAggregateInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type receipt_tranAvgOrderByAggregateInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type receipt_tranMaxOrderByAggregateInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type receipt_tranMinOrderByAggregateInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type receipt_tranSumOrderByAggregateInput = {
    receipt_tran_id?: SortOrder
    receipt_id?: SortOrder
    sub_treatment_type_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Receipt_tranListRelationFilter = {
    every?: receipt_tranWhereInput
    some?: receipt_tranWhereInput
    none?: receipt_tranWhereInput
  }

  export type receipt_tranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type receiptsCountOrderByAggregateInput = {
    receipt_id?: SortOrder
    receipt_no?: SortOrder
    receipt_date?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    payment_mode_id?: SortOrder
    reference_no?: SortOrder
    reference_date?: SortOrder
    cancellation_datetime?: SortOrder
    cancellation_by_user_id?: SortOrder
    cancellation_remarks?: SortOrder
  }

  export type receiptsAvgOrderByAggregateInput = {
    receipt_id?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    user_id?: SortOrder
    payment_mode_id?: SortOrder
    cancellation_by_user_id?: SortOrder
  }

  export type receiptsMaxOrderByAggregateInput = {
    receipt_id?: SortOrder
    receipt_no?: SortOrder
    receipt_date?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    payment_mode_id?: SortOrder
    reference_no?: SortOrder
    reference_date?: SortOrder
    cancellation_datetime?: SortOrder
    cancellation_by_user_id?: SortOrder
    cancellation_remarks?: SortOrder
  }

  export type receiptsMinOrderByAggregateInput = {
    receipt_id?: SortOrder
    receipt_no?: SortOrder
    receipt_date?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    payment_mode_id?: SortOrder
    reference_no?: SortOrder
    reference_date?: SortOrder
    cancellation_datetime?: SortOrder
    cancellation_by_user_id?: SortOrder
    cancellation_remarks?: SortOrder
  }

  export type receiptsSumOrderByAggregateInput = {
    receipt_id?: SortOrder
    opd_id?: SortOrder
    amount_paid?: SortOrder
    user_id?: SortOrder
    payment_mode_id?: SortOrder
    cancellation_by_user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Treatment_typesScalarRelationFilter = {
    is?: treatment_typesWhereInput
    isNot?: treatment_typesWhereInput
  }

  export type sub_treatment_typesCountOrderByAggregateInput = {
    sub_treatment_type_id?: SortOrder
    sub_treatment_type_name?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    account_id?: SortOrder
  }

  export type sub_treatment_typesAvgOrderByAggregateInput = {
    sub_treatment_type_id?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
  }

  export type sub_treatment_typesMaxOrderByAggregateInput = {
    sub_treatment_type_id?: SortOrder
    sub_treatment_type_name?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    account_id?: SortOrder
  }

  export type sub_treatment_typesMinOrderByAggregateInput = {
    sub_treatment_type_id?: SortOrder
    sub_treatment_type_name?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    account_id?: SortOrder
  }

  export type sub_treatment_typesSumOrderByAggregateInput = {
    sub_treatment_type_id?: SortOrder
    treatment_type_id?: SortOrder
    rate?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
  }

  export type Sub_treatment_typesListRelationFilter = {
    every?: sub_treatment_typesWhereInput
    some?: sub_treatment_typesWhereInput
    none?: sub_treatment_typesWhereInput
  }

  export type sub_treatment_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type treatment_typesCountOrderByAggregateInput = {
    treatment_type_id?: SortOrder
    treatment_type_name?: SortOrder
    treatment_type_short_name?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type treatment_typesAvgOrderByAggregateInput = {
    treatment_type_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type treatment_typesMaxOrderByAggregateInput = {
    treatment_type_id?: SortOrder
    treatment_type_name?: SortOrder
    treatment_type_short_name?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type treatment_typesMinOrderByAggregateInput = {
    treatment_type_id?: SortOrder
    treatment_type_name?: SortOrder
    treatment_type_short_name?: SortOrder
    hospital_id?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type treatment_typesSumOrderByAggregateInput = {
    treatment_type_id?: SortOrder
    hospital_id?: SortOrder
    user_id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type hospitalsCreateNestedOneWithoutDiagnosis_typesInput = {
    create?: XOR<hospitalsCreateWithoutDiagnosis_typesInput, hospitalsUncheckedCreateWithoutDiagnosis_typesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutDiagnosis_typesInput
    connect?: hospitalsWhereUniqueInput
  }

  export type opd_diagnosis_typesCreateNestedManyWithoutDiagnosis_typesInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput> | opd_diagnosis_typesCreateWithoutDiagnosis_typesInput[] | opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput | opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput[]
    createMany?: opd_diagnosis_typesCreateManyDiagnosis_typesInputEnvelope
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
  }

  export type opd_diagnosis_typesUncheckedCreateNestedManyWithoutDiagnosis_typesInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput> | opd_diagnosis_typesCreateWithoutDiagnosis_typesInput[] | opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput | opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput[]
    createMany?: opd_diagnosis_typesCreateManyDiagnosis_typesInputEnvelope
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type hospitalsUpdateOneRequiredWithoutDiagnosis_typesNestedInput = {
    create?: XOR<hospitalsCreateWithoutDiagnosis_typesInput, hospitalsUncheckedCreateWithoutDiagnosis_typesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutDiagnosis_typesInput
    upsert?: hospitalsUpsertWithoutDiagnosis_typesInput
    connect?: hospitalsWhereUniqueInput
    update?: XOR<XOR<hospitalsUpdateToOneWithWhereWithoutDiagnosis_typesInput, hospitalsUpdateWithoutDiagnosis_typesInput>, hospitalsUncheckedUpdateWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesUpdateManyWithoutDiagnosis_typesNestedInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput> | opd_diagnosis_typesCreateWithoutDiagnosis_typesInput[] | opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput | opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput[]
    upsert?: opd_diagnosis_typesUpsertWithWhereUniqueWithoutDiagnosis_typesInput | opd_diagnosis_typesUpsertWithWhereUniqueWithoutDiagnosis_typesInput[]
    createMany?: opd_diagnosis_typesCreateManyDiagnosis_typesInputEnvelope
    set?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    disconnect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    delete?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    update?: opd_diagnosis_typesUpdateWithWhereUniqueWithoutDiagnosis_typesInput | opd_diagnosis_typesUpdateWithWhereUniqueWithoutDiagnosis_typesInput[]
    updateMany?: opd_diagnosis_typesUpdateManyWithWhereWithoutDiagnosis_typesInput | opd_diagnosis_typesUpdateManyWithWhereWithoutDiagnosis_typesInput[]
    deleteMany?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
  }

  export type opd_diagnosis_typesUncheckedUpdateManyWithoutDiagnosis_typesNestedInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput> | opd_diagnosis_typesCreateWithoutDiagnosis_typesInput[] | opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput | opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput[]
    upsert?: opd_diagnosis_typesUpsertWithWhereUniqueWithoutDiagnosis_typesInput | opd_diagnosis_typesUpsertWithWhereUniqueWithoutDiagnosis_typesInput[]
    createMany?: opd_diagnosis_typesCreateManyDiagnosis_typesInputEnvelope
    set?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    disconnect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    delete?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    update?: opd_diagnosis_typesUpdateWithWhereUniqueWithoutDiagnosis_typesInput | opd_diagnosis_typesUpdateWithWhereUniqueWithoutDiagnosis_typesInput[]
    updateMany?: opd_diagnosis_typesUpdateManyWithWhereWithoutDiagnosis_typesInput | opd_diagnosis_typesUpdateManyWithWhereWithoutDiagnosis_typesInput[]
    deleteMany?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
  }

  export type hospitalsCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<hospitalsCreateWithoutDoctorsInput, hospitalsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutDoctorsInput
    connect?: hospitalsWhereUniqueInput
  }

  export type opdCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput> | opdCreateWithoutDoctorsInput[] | opdUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutDoctorsInput | opdCreateOrConnectWithoutDoctorsInput[]
    createMany?: opdCreateManyDoctorsInputEnvelope
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
  }

  export type opdUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput> | opdCreateWithoutDoctorsInput[] | opdUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutDoctorsInput | opdCreateOrConnectWithoutDoctorsInput[]
    createMany?: opdCreateManyDoctorsInputEnvelope
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hospitalsUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<hospitalsCreateWithoutDoctorsInput, hospitalsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutDoctorsInput
    upsert?: hospitalsUpsertWithoutDoctorsInput
    connect?: hospitalsWhereUniqueInput
    update?: XOR<XOR<hospitalsUpdateToOneWithWhereWithoutDoctorsInput, hospitalsUpdateWithoutDoctorsInput>, hospitalsUncheckedUpdateWithoutDoctorsInput>
  }

  export type opdUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput> | opdCreateWithoutDoctorsInput[] | opdUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutDoctorsInput | opdCreateOrConnectWithoutDoctorsInput[]
    upsert?: opdUpsertWithWhereUniqueWithoutDoctorsInput | opdUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: opdCreateManyDoctorsInputEnvelope
    set?: opdWhereUniqueInput | opdWhereUniqueInput[]
    disconnect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    delete?: opdWhereUniqueInput | opdWhereUniqueInput[]
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    update?: opdUpdateWithWhereUniqueWithoutDoctorsInput | opdUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: opdUpdateManyWithWhereWithoutDoctorsInput | opdUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: opdScalarWhereInput | opdScalarWhereInput[]
  }

  export type opdUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput> | opdCreateWithoutDoctorsInput[] | opdUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutDoctorsInput | opdCreateOrConnectWithoutDoctorsInput[]
    upsert?: opdUpsertWithWhereUniqueWithoutDoctorsInput | opdUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: opdCreateManyDoctorsInputEnvelope
    set?: opdWhereUniqueInput | opdWhereUniqueInput[]
    disconnect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    delete?: opdWhereUniqueInput | opdWhereUniqueInput[]
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    update?: opdUpdateWithWhereUniqueWithoutDoctorsInput | opdUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: opdUpdateManyWithWhereWithoutDoctorsInput | opdUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: opdScalarWhereInput | opdScalarWhereInput[]
  }

  export type diagnosis_typesCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput> | diagnosis_typesCreateWithoutHospitalsInput[] | diagnosis_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutHospitalsInput | diagnosis_typesCreateOrConnectWithoutHospitalsInput[]
    createMany?: diagnosis_typesCreateManyHospitalsInputEnvelope
    connect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
  }

  export type doctorsCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput> | doctorsCreateWithoutHospitalsInput[] | doctorsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutHospitalsInput | doctorsCreateOrConnectWithoutHospitalsInput[]
    createMany?: doctorsCreateManyHospitalsInputEnvelope
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
  }

  export type patientsCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput> | patientsCreateWithoutHospitalsInput[] | patientsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutHospitalsInput | patientsCreateOrConnectWithoutHospitalsInput[]
    createMany?: patientsCreateManyHospitalsInputEnvelope
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
  }

  export type treatment_typesCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput> | treatment_typesCreateWithoutHospitalsInput[] | treatment_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: treatment_typesCreateOrConnectWithoutHospitalsInput | treatment_typesCreateOrConnectWithoutHospitalsInput[]
    createMany?: treatment_typesCreateManyHospitalsInputEnvelope
    connect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
  }

  export type diagnosis_typesUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput> | diagnosis_typesCreateWithoutHospitalsInput[] | diagnosis_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutHospitalsInput | diagnosis_typesCreateOrConnectWithoutHospitalsInput[]
    createMany?: diagnosis_typesCreateManyHospitalsInputEnvelope
    connect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
  }

  export type doctorsUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput> | doctorsCreateWithoutHospitalsInput[] | doctorsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutHospitalsInput | doctorsCreateOrConnectWithoutHospitalsInput[]
    createMany?: doctorsCreateManyHospitalsInputEnvelope
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
  }

  export type patientsUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput> | patientsCreateWithoutHospitalsInput[] | patientsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutHospitalsInput | patientsCreateOrConnectWithoutHospitalsInput[]
    createMany?: patientsCreateManyHospitalsInputEnvelope
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
  }

  export type treatment_typesUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput> | treatment_typesCreateWithoutHospitalsInput[] | treatment_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: treatment_typesCreateOrConnectWithoutHospitalsInput | treatment_typesCreateOrConnectWithoutHospitalsInput[]
    createMany?: treatment_typesCreateManyHospitalsInputEnvelope
    connect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type diagnosis_typesUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput> | diagnosis_typesCreateWithoutHospitalsInput[] | diagnosis_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutHospitalsInput | diagnosis_typesCreateOrConnectWithoutHospitalsInput[]
    upsert?: diagnosis_typesUpsertWithWhereUniqueWithoutHospitalsInput | diagnosis_typesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: diagnosis_typesCreateManyHospitalsInputEnvelope
    set?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    disconnect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    delete?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    connect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    update?: diagnosis_typesUpdateWithWhereUniqueWithoutHospitalsInput | diagnosis_typesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: diagnosis_typesUpdateManyWithWhereWithoutHospitalsInput | diagnosis_typesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: diagnosis_typesScalarWhereInput | diagnosis_typesScalarWhereInput[]
  }

  export type doctorsUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput> | doctorsCreateWithoutHospitalsInput[] | doctorsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutHospitalsInput | doctorsCreateOrConnectWithoutHospitalsInput[]
    upsert?: doctorsUpsertWithWhereUniqueWithoutHospitalsInput | doctorsUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: doctorsCreateManyHospitalsInputEnvelope
    set?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    disconnect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    delete?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    update?: doctorsUpdateWithWhereUniqueWithoutHospitalsInput | doctorsUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: doctorsUpdateManyWithWhereWithoutHospitalsInput | doctorsUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
  }

  export type patientsUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput> | patientsCreateWithoutHospitalsInput[] | patientsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutHospitalsInput | patientsCreateOrConnectWithoutHospitalsInput[]
    upsert?: patientsUpsertWithWhereUniqueWithoutHospitalsInput | patientsUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: patientsCreateManyHospitalsInputEnvelope
    set?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    disconnect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    delete?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    update?: patientsUpdateWithWhereUniqueWithoutHospitalsInput | patientsUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: patientsUpdateManyWithWhereWithoutHospitalsInput | patientsUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: patientsScalarWhereInput | patientsScalarWhereInput[]
  }

  export type treatment_typesUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput> | treatment_typesCreateWithoutHospitalsInput[] | treatment_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: treatment_typesCreateOrConnectWithoutHospitalsInput | treatment_typesCreateOrConnectWithoutHospitalsInput[]
    upsert?: treatment_typesUpsertWithWhereUniqueWithoutHospitalsInput | treatment_typesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: treatment_typesCreateManyHospitalsInputEnvelope
    set?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    disconnect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    delete?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    connect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    update?: treatment_typesUpdateWithWhereUniqueWithoutHospitalsInput | treatment_typesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: treatment_typesUpdateManyWithWhereWithoutHospitalsInput | treatment_typesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: treatment_typesScalarWhereInput | treatment_typesScalarWhereInput[]
  }

  export type diagnosis_typesUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput> | diagnosis_typesCreateWithoutHospitalsInput[] | diagnosis_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutHospitalsInput | diagnosis_typesCreateOrConnectWithoutHospitalsInput[]
    upsert?: diagnosis_typesUpsertWithWhereUniqueWithoutHospitalsInput | diagnosis_typesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: diagnosis_typesCreateManyHospitalsInputEnvelope
    set?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    disconnect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    delete?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    connect?: diagnosis_typesWhereUniqueInput | diagnosis_typesWhereUniqueInput[]
    update?: diagnosis_typesUpdateWithWhereUniqueWithoutHospitalsInput | diagnosis_typesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: diagnosis_typesUpdateManyWithWhereWithoutHospitalsInput | diagnosis_typesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: diagnosis_typesScalarWhereInput | diagnosis_typesScalarWhereInput[]
  }

  export type doctorsUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput> | doctorsCreateWithoutHospitalsInput[] | doctorsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutHospitalsInput | doctorsCreateOrConnectWithoutHospitalsInput[]
    upsert?: doctorsUpsertWithWhereUniqueWithoutHospitalsInput | doctorsUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: doctorsCreateManyHospitalsInputEnvelope
    set?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    disconnect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    delete?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    update?: doctorsUpdateWithWhereUniqueWithoutHospitalsInput | doctorsUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: doctorsUpdateManyWithWhereWithoutHospitalsInput | doctorsUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
  }

  export type patientsUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput> | patientsCreateWithoutHospitalsInput[] | patientsUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: patientsCreateOrConnectWithoutHospitalsInput | patientsCreateOrConnectWithoutHospitalsInput[]
    upsert?: patientsUpsertWithWhereUniqueWithoutHospitalsInput | patientsUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: patientsCreateManyHospitalsInputEnvelope
    set?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    disconnect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    delete?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    connect?: patientsWhereUniqueInput | patientsWhereUniqueInput[]
    update?: patientsUpdateWithWhereUniqueWithoutHospitalsInput | patientsUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: patientsUpdateManyWithWhereWithoutHospitalsInput | patientsUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: patientsScalarWhereInput | patientsScalarWhereInput[]
  }

  export type treatment_typesUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput> | treatment_typesCreateWithoutHospitalsInput[] | treatment_typesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: treatment_typesCreateOrConnectWithoutHospitalsInput | treatment_typesCreateOrConnectWithoutHospitalsInput[]
    upsert?: treatment_typesUpsertWithWhereUniqueWithoutHospitalsInput | treatment_typesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: treatment_typesCreateManyHospitalsInputEnvelope
    set?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    disconnect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    delete?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    connect?: treatment_typesWhereUniqueInput | treatment_typesWhereUniqueInput[]
    update?: treatment_typesUpdateWithWhereUniqueWithoutHospitalsInput | treatment_typesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: treatment_typesUpdateManyWithWhereWithoutHospitalsInput | treatment_typesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: treatment_typesScalarWhereInput | treatment_typesScalarWhereInput[]
  }

  export type doctorsCreateNestedOneWithoutOpdInput = {
    create?: XOR<doctorsCreateWithoutOpdInput, doctorsUncheckedCreateWithoutOpdInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutOpdInput
    connect?: doctorsWhereUniqueInput
  }

  export type patientsCreateNestedOneWithoutOpdInput = {
    create?: XOR<patientsCreateWithoutOpdInput, patientsUncheckedCreateWithoutOpdInput>
    connectOrCreate?: patientsCreateOrConnectWithoutOpdInput
    connect?: patientsWhereUniqueInput
  }

  export type opd_diagnosis_typesCreateNestedManyWithoutOpdInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput> | opd_diagnosis_typesCreateWithoutOpdInput[] | opd_diagnosis_typesUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutOpdInput | opd_diagnosis_typesCreateOrConnectWithoutOpdInput[]
    createMany?: opd_diagnosis_typesCreateManyOpdInputEnvelope
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
  }

  export type receiptsCreateNestedManyWithoutOpdInput = {
    create?: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput> | receiptsCreateWithoutOpdInput[] | receiptsUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: receiptsCreateOrConnectWithoutOpdInput | receiptsCreateOrConnectWithoutOpdInput[]
    createMany?: receiptsCreateManyOpdInputEnvelope
    connect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
  }

  export type opd_diagnosis_typesUncheckedCreateNestedManyWithoutOpdInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput> | opd_diagnosis_typesCreateWithoutOpdInput[] | opd_diagnosis_typesUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutOpdInput | opd_diagnosis_typesCreateOrConnectWithoutOpdInput[]
    createMany?: opd_diagnosis_typesCreateManyOpdInputEnvelope
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
  }

  export type receiptsUncheckedCreateNestedManyWithoutOpdInput = {
    create?: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput> | receiptsCreateWithoutOpdInput[] | receiptsUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: receiptsCreateOrConnectWithoutOpdInput | receiptsCreateOrConnectWithoutOpdInput[]
    createMany?: receiptsCreateManyOpdInputEnvelope
    connect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type doctorsUpdateOneRequiredWithoutOpdNestedInput = {
    create?: XOR<doctorsCreateWithoutOpdInput, doctorsUncheckedCreateWithoutOpdInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutOpdInput
    upsert?: doctorsUpsertWithoutOpdInput
    connect?: doctorsWhereUniqueInput
    update?: XOR<XOR<doctorsUpdateToOneWithWhereWithoutOpdInput, doctorsUpdateWithoutOpdInput>, doctorsUncheckedUpdateWithoutOpdInput>
  }

  export type patientsUpdateOneRequiredWithoutOpdNestedInput = {
    create?: XOR<patientsCreateWithoutOpdInput, patientsUncheckedCreateWithoutOpdInput>
    connectOrCreate?: patientsCreateOrConnectWithoutOpdInput
    upsert?: patientsUpsertWithoutOpdInput
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutOpdInput, patientsUpdateWithoutOpdInput>, patientsUncheckedUpdateWithoutOpdInput>
  }

  export type opd_diagnosis_typesUpdateManyWithoutOpdNestedInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput> | opd_diagnosis_typesCreateWithoutOpdInput[] | opd_diagnosis_typesUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutOpdInput | opd_diagnosis_typesCreateOrConnectWithoutOpdInput[]
    upsert?: opd_diagnosis_typesUpsertWithWhereUniqueWithoutOpdInput | opd_diagnosis_typesUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: opd_diagnosis_typesCreateManyOpdInputEnvelope
    set?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    disconnect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    delete?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    update?: opd_diagnosis_typesUpdateWithWhereUniqueWithoutOpdInput | opd_diagnosis_typesUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: opd_diagnosis_typesUpdateManyWithWhereWithoutOpdInput | opd_diagnosis_typesUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
  }

  export type receiptsUpdateManyWithoutOpdNestedInput = {
    create?: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput> | receiptsCreateWithoutOpdInput[] | receiptsUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: receiptsCreateOrConnectWithoutOpdInput | receiptsCreateOrConnectWithoutOpdInput[]
    upsert?: receiptsUpsertWithWhereUniqueWithoutOpdInput | receiptsUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: receiptsCreateManyOpdInputEnvelope
    set?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    disconnect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    delete?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    connect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    update?: receiptsUpdateWithWhereUniqueWithoutOpdInput | receiptsUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: receiptsUpdateManyWithWhereWithoutOpdInput | receiptsUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: receiptsScalarWhereInput | receiptsScalarWhereInput[]
  }

  export type opd_diagnosis_typesUncheckedUpdateManyWithoutOpdNestedInput = {
    create?: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput> | opd_diagnosis_typesCreateWithoutOpdInput[] | opd_diagnosis_typesUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: opd_diagnosis_typesCreateOrConnectWithoutOpdInput | opd_diagnosis_typesCreateOrConnectWithoutOpdInput[]
    upsert?: opd_diagnosis_typesUpsertWithWhereUniqueWithoutOpdInput | opd_diagnosis_typesUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: opd_diagnosis_typesCreateManyOpdInputEnvelope
    set?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    disconnect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    delete?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    connect?: opd_diagnosis_typesWhereUniqueInput | opd_diagnosis_typesWhereUniqueInput[]
    update?: opd_diagnosis_typesUpdateWithWhereUniqueWithoutOpdInput | opd_diagnosis_typesUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: opd_diagnosis_typesUpdateManyWithWhereWithoutOpdInput | opd_diagnosis_typesUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
  }

  export type receiptsUncheckedUpdateManyWithoutOpdNestedInput = {
    create?: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput> | receiptsCreateWithoutOpdInput[] | receiptsUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: receiptsCreateOrConnectWithoutOpdInput | receiptsCreateOrConnectWithoutOpdInput[]
    upsert?: receiptsUpsertWithWhereUniqueWithoutOpdInput | receiptsUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: receiptsCreateManyOpdInputEnvelope
    set?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    disconnect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    delete?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    connect?: receiptsWhereUniqueInput | receiptsWhereUniqueInput[]
    update?: receiptsUpdateWithWhereUniqueWithoutOpdInput | receiptsUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: receiptsUpdateManyWithWhereWithoutOpdInput | receiptsUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: receiptsScalarWhereInput | receiptsScalarWhereInput[]
  }

  export type diagnosis_typesCreateNestedOneWithoutOpd_diagnosis_typesInput = {
    create?: XOR<diagnosis_typesCreateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedCreateWithoutOpd_diagnosis_typesInput>
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutOpd_diagnosis_typesInput
    connect?: diagnosis_typesWhereUniqueInput
  }

  export type opdCreateNestedOneWithoutOpd_diagnosis_typesInput = {
    create?: XOR<opdCreateWithoutOpd_diagnosis_typesInput, opdUncheckedCreateWithoutOpd_diagnosis_typesInput>
    connectOrCreate?: opdCreateOrConnectWithoutOpd_diagnosis_typesInput
    connect?: opdWhereUniqueInput
  }

  export type diagnosis_typesUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput = {
    create?: XOR<diagnosis_typesCreateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedCreateWithoutOpd_diagnosis_typesInput>
    connectOrCreate?: diagnosis_typesCreateOrConnectWithoutOpd_diagnosis_typesInput
    upsert?: diagnosis_typesUpsertWithoutOpd_diagnosis_typesInput
    connect?: diagnosis_typesWhereUniqueInput
    update?: XOR<XOR<diagnosis_typesUpdateToOneWithWhereWithoutOpd_diagnosis_typesInput, diagnosis_typesUpdateWithoutOpd_diagnosis_typesInput>, diagnosis_typesUncheckedUpdateWithoutOpd_diagnosis_typesInput>
  }

  export type opdUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput = {
    create?: XOR<opdCreateWithoutOpd_diagnosis_typesInput, opdUncheckedCreateWithoutOpd_diagnosis_typesInput>
    connectOrCreate?: opdCreateOrConnectWithoutOpd_diagnosis_typesInput
    upsert?: opdUpsertWithoutOpd_diagnosis_typesInput
    connect?: opdWhereUniqueInput
    update?: XOR<XOR<opdUpdateToOneWithWhereWithoutOpd_diagnosis_typesInput, opdUpdateWithoutOpd_diagnosis_typesInput>, opdUncheckedUpdateWithoutOpd_diagnosis_typesInput>
  }

  export type opdCreateNestedManyWithoutPatientsInput = {
    create?: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput> | opdCreateWithoutPatientsInput[] | opdUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutPatientsInput | opdCreateOrConnectWithoutPatientsInput[]
    createMany?: opdCreateManyPatientsInputEnvelope
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
  }

  export type hospitalsCreateNestedOneWithoutPatientsInput = {
    create?: XOR<hospitalsCreateWithoutPatientsInput, hospitalsUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutPatientsInput
    connect?: hospitalsWhereUniqueInput
  }

  export type opdUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput> | opdCreateWithoutPatientsInput[] | opdUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutPatientsInput | opdCreateOrConnectWithoutPatientsInput[]
    createMany?: opdCreateManyPatientsInputEnvelope
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
  }

  export type opdUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput> | opdCreateWithoutPatientsInput[] | opdUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutPatientsInput | opdCreateOrConnectWithoutPatientsInput[]
    upsert?: opdUpsertWithWhereUniqueWithoutPatientsInput | opdUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: opdCreateManyPatientsInputEnvelope
    set?: opdWhereUniqueInput | opdWhereUniqueInput[]
    disconnect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    delete?: opdWhereUniqueInput | opdWhereUniqueInput[]
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    update?: opdUpdateWithWhereUniqueWithoutPatientsInput | opdUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: opdUpdateManyWithWhereWithoutPatientsInput | opdUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: opdScalarWhereInput | opdScalarWhereInput[]
  }

  export type hospitalsUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<hospitalsCreateWithoutPatientsInput, hospitalsUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutPatientsInput
    upsert?: hospitalsUpsertWithoutPatientsInput
    connect?: hospitalsWhereUniqueInput
    update?: XOR<XOR<hospitalsUpdateToOneWithWhereWithoutPatientsInput, hospitalsUpdateWithoutPatientsInput>, hospitalsUncheckedUpdateWithoutPatientsInput>
  }

  export type opdUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput> | opdCreateWithoutPatientsInput[] | opdUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: opdCreateOrConnectWithoutPatientsInput | opdCreateOrConnectWithoutPatientsInput[]
    upsert?: opdUpsertWithWhereUniqueWithoutPatientsInput | opdUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: opdCreateManyPatientsInputEnvelope
    set?: opdWhereUniqueInput | opdWhereUniqueInput[]
    disconnect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    delete?: opdWhereUniqueInput | opdWhereUniqueInput[]
    connect?: opdWhereUniqueInput | opdWhereUniqueInput[]
    update?: opdUpdateWithWhereUniqueWithoutPatientsInput | opdUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: opdUpdateManyWithWhereWithoutPatientsInput | opdUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: opdScalarWhereInput | opdScalarWhereInput[]
  }

  export type sub_treatment_typesCreateNestedOneWithoutReceipt_tranInput = {
    create?: XOR<sub_treatment_typesCreateWithoutReceipt_tranInput, sub_treatment_typesUncheckedCreateWithoutReceipt_tranInput>
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutReceipt_tranInput
    connect?: sub_treatment_typesWhereUniqueInput
  }

  export type receiptsCreateNestedOneWithoutReceipt_tranInput = {
    create?: XOR<receiptsCreateWithoutReceipt_tranInput, receiptsUncheckedCreateWithoutReceipt_tranInput>
    connectOrCreate?: receiptsCreateOrConnectWithoutReceipt_tranInput
    connect?: receiptsWhereUniqueInput
  }

  export type sub_treatment_typesUpdateOneRequiredWithoutReceipt_tranNestedInput = {
    create?: XOR<sub_treatment_typesCreateWithoutReceipt_tranInput, sub_treatment_typesUncheckedCreateWithoutReceipt_tranInput>
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutReceipt_tranInput
    upsert?: sub_treatment_typesUpsertWithoutReceipt_tranInput
    connect?: sub_treatment_typesWhereUniqueInput
    update?: XOR<XOR<sub_treatment_typesUpdateToOneWithWhereWithoutReceipt_tranInput, sub_treatment_typesUpdateWithoutReceipt_tranInput>, sub_treatment_typesUncheckedUpdateWithoutReceipt_tranInput>
  }

  export type receiptsUpdateOneRequiredWithoutReceipt_tranNestedInput = {
    create?: XOR<receiptsCreateWithoutReceipt_tranInput, receiptsUncheckedCreateWithoutReceipt_tranInput>
    connectOrCreate?: receiptsCreateOrConnectWithoutReceipt_tranInput
    upsert?: receiptsUpsertWithoutReceipt_tranInput
    connect?: receiptsWhereUniqueInput
    update?: XOR<XOR<receiptsUpdateToOneWithWhereWithoutReceipt_tranInput, receiptsUpdateWithoutReceipt_tranInput>, receiptsUncheckedUpdateWithoutReceipt_tranInput>
  }

  export type receipt_tranCreateNestedManyWithoutReceiptsInput = {
    create?: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput> | receipt_tranCreateWithoutReceiptsInput[] | receipt_tranUncheckedCreateWithoutReceiptsInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutReceiptsInput | receipt_tranCreateOrConnectWithoutReceiptsInput[]
    createMany?: receipt_tranCreateManyReceiptsInputEnvelope
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
  }

  export type opdCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<opdCreateWithoutReceiptsInput, opdUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: opdCreateOrConnectWithoutReceiptsInput
    connect?: opdWhereUniqueInput
  }

  export type receipt_tranUncheckedCreateNestedManyWithoutReceiptsInput = {
    create?: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput> | receipt_tranCreateWithoutReceiptsInput[] | receipt_tranUncheckedCreateWithoutReceiptsInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutReceiptsInput | receipt_tranCreateOrConnectWithoutReceiptsInput[]
    createMany?: receipt_tranCreateManyReceiptsInputEnvelope
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type receipt_tranUpdateManyWithoutReceiptsNestedInput = {
    create?: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput> | receipt_tranCreateWithoutReceiptsInput[] | receipt_tranUncheckedCreateWithoutReceiptsInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutReceiptsInput | receipt_tranCreateOrConnectWithoutReceiptsInput[]
    upsert?: receipt_tranUpsertWithWhereUniqueWithoutReceiptsInput | receipt_tranUpsertWithWhereUniqueWithoutReceiptsInput[]
    createMany?: receipt_tranCreateManyReceiptsInputEnvelope
    set?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    disconnect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    delete?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    update?: receipt_tranUpdateWithWhereUniqueWithoutReceiptsInput | receipt_tranUpdateWithWhereUniqueWithoutReceiptsInput[]
    updateMany?: receipt_tranUpdateManyWithWhereWithoutReceiptsInput | receipt_tranUpdateManyWithWhereWithoutReceiptsInput[]
    deleteMany?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
  }

  export type opdUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<opdCreateWithoutReceiptsInput, opdUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: opdCreateOrConnectWithoutReceiptsInput
    upsert?: opdUpsertWithoutReceiptsInput
    connect?: opdWhereUniqueInput
    update?: XOR<XOR<opdUpdateToOneWithWhereWithoutReceiptsInput, opdUpdateWithoutReceiptsInput>, opdUncheckedUpdateWithoutReceiptsInput>
  }

  export type receipt_tranUncheckedUpdateManyWithoutReceiptsNestedInput = {
    create?: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput> | receipt_tranCreateWithoutReceiptsInput[] | receipt_tranUncheckedCreateWithoutReceiptsInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutReceiptsInput | receipt_tranCreateOrConnectWithoutReceiptsInput[]
    upsert?: receipt_tranUpsertWithWhereUniqueWithoutReceiptsInput | receipt_tranUpsertWithWhereUniqueWithoutReceiptsInput[]
    createMany?: receipt_tranCreateManyReceiptsInputEnvelope
    set?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    disconnect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    delete?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    update?: receipt_tranUpdateWithWhereUniqueWithoutReceiptsInput | receipt_tranUpdateWithWhereUniqueWithoutReceiptsInput[]
    updateMany?: receipt_tranUpdateManyWithWhereWithoutReceiptsInput | receipt_tranUpdateManyWithWhereWithoutReceiptsInput[]
    deleteMany?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
  }

  export type receipt_tranCreateNestedManyWithoutSub_treatment_typesInput = {
    create?: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput> | receipt_tranCreateWithoutSub_treatment_typesInput[] | receipt_tranUncheckedCreateWithoutSub_treatment_typesInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutSub_treatment_typesInput | receipt_tranCreateOrConnectWithoutSub_treatment_typesInput[]
    createMany?: receipt_tranCreateManySub_treatment_typesInputEnvelope
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
  }

  export type treatment_typesCreateNestedOneWithoutSub_treatment_typesInput = {
    create?: XOR<treatment_typesCreateWithoutSub_treatment_typesInput, treatment_typesUncheckedCreateWithoutSub_treatment_typesInput>
    connectOrCreate?: treatment_typesCreateOrConnectWithoutSub_treatment_typesInput
    connect?: treatment_typesWhereUniqueInput
  }

  export type receipt_tranUncheckedCreateNestedManyWithoutSub_treatment_typesInput = {
    create?: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput> | receipt_tranCreateWithoutSub_treatment_typesInput[] | receipt_tranUncheckedCreateWithoutSub_treatment_typesInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutSub_treatment_typesInput | receipt_tranCreateOrConnectWithoutSub_treatment_typesInput[]
    createMany?: receipt_tranCreateManySub_treatment_typesInputEnvelope
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
  }

  export type receipt_tranUpdateManyWithoutSub_treatment_typesNestedInput = {
    create?: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput> | receipt_tranCreateWithoutSub_treatment_typesInput[] | receipt_tranUncheckedCreateWithoutSub_treatment_typesInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutSub_treatment_typesInput | receipt_tranCreateOrConnectWithoutSub_treatment_typesInput[]
    upsert?: receipt_tranUpsertWithWhereUniqueWithoutSub_treatment_typesInput | receipt_tranUpsertWithWhereUniqueWithoutSub_treatment_typesInput[]
    createMany?: receipt_tranCreateManySub_treatment_typesInputEnvelope
    set?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    disconnect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    delete?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    update?: receipt_tranUpdateWithWhereUniqueWithoutSub_treatment_typesInput | receipt_tranUpdateWithWhereUniqueWithoutSub_treatment_typesInput[]
    updateMany?: receipt_tranUpdateManyWithWhereWithoutSub_treatment_typesInput | receipt_tranUpdateManyWithWhereWithoutSub_treatment_typesInput[]
    deleteMany?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
  }

  export type treatment_typesUpdateOneRequiredWithoutSub_treatment_typesNestedInput = {
    create?: XOR<treatment_typesCreateWithoutSub_treatment_typesInput, treatment_typesUncheckedCreateWithoutSub_treatment_typesInput>
    connectOrCreate?: treatment_typesCreateOrConnectWithoutSub_treatment_typesInput
    upsert?: treatment_typesUpsertWithoutSub_treatment_typesInput
    connect?: treatment_typesWhereUniqueInput
    update?: XOR<XOR<treatment_typesUpdateToOneWithWhereWithoutSub_treatment_typesInput, treatment_typesUpdateWithoutSub_treatment_typesInput>, treatment_typesUncheckedUpdateWithoutSub_treatment_typesInput>
  }

  export type receipt_tranUncheckedUpdateManyWithoutSub_treatment_typesNestedInput = {
    create?: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput> | receipt_tranCreateWithoutSub_treatment_typesInput[] | receipt_tranUncheckedCreateWithoutSub_treatment_typesInput[]
    connectOrCreate?: receipt_tranCreateOrConnectWithoutSub_treatment_typesInput | receipt_tranCreateOrConnectWithoutSub_treatment_typesInput[]
    upsert?: receipt_tranUpsertWithWhereUniqueWithoutSub_treatment_typesInput | receipt_tranUpsertWithWhereUniqueWithoutSub_treatment_typesInput[]
    createMany?: receipt_tranCreateManySub_treatment_typesInputEnvelope
    set?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    disconnect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    delete?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    connect?: receipt_tranWhereUniqueInput | receipt_tranWhereUniqueInput[]
    update?: receipt_tranUpdateWithWhereUniqueWithoutSub_treatment_typesInput | receipt_tranUpdateWithWhereUniqueWithoutSub_treatment_typesInput[]
    updateMany?: receipt_tranUpdateManyWithWhereWithoutSub_treatment_typesInput | receipt_tranUpdateManyWithWhereWithoutSub_treatment_typesInput[]
    deleteMany?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
  }

  export type sub_treatment_typesCreateNestedManyWithoutTreatment_typesInput = {
    create?: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput> | sub_treatment_typesCreateWithoutTreatment_typesInput[] | sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput[]
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput | sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput[]
    createMany?: sub_treatment_typesCreateManyTreatment_typesInputEnvelope
    connect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
  }

  export type hospitalsCreateNestedOneWithoutTreatment_typesInput = {
    create?: XOR<hospitalsCreateWithoutTreatment_typesInput, hospitalsUncheckedCreateWithoutTreatment_typesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutTreatment_typesInput
    connect?: hospitalsWhereUniqueInput
  }

  export type sub_treatment_typesUncheckedCreateNestedManyWithoutTreatment_typesInput = {
    create?: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput> | sub_treatment_typesCreateWithoutTreatment_typesInput[] | sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput[]
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput | sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput[]
    createMany?: sub_treatment_typesCreateManyTreatment_typesInputEnvelope
    connect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
  }

  export type sub_treatment_typesUpdateManyWithoutTreatment_typesNestedInput = {
    create?: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput> | sub_treatment_typesCreateWithoutTreatment_typesInput[] | sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput[]
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput | sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput[]
    upsert?: sub_treatment_typesUpsertWithWhereUniqueWithoutTreatment_typesInput | sub_treatment_typesUpsertWithWhereUniqueWithoutTreatment_typesInput[]
    createMany?: sub_treatment_typesCreateManyTreatment_typesInputEnvelope
    set?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    disconnect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    delete?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    connect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    update?: sub_treatment_typesUpdateWithWhereUniqueWithoutTreatment_typesInput | sub_treatment_typesUpdateWithWhereUniqueWithoutTreatment_typesInput[]
    updateMany?: sub_treatment_typesUpdateManyWithWhereWithoutTreatment_typesInput | sub_treatment_typesUpdateManyWithWhereWithoutTreatment_typesInput[]
    deleteMany?: sub_treatment_typesScalarWhereInput | sub_treatment_typesScalarWhereInput[]
  }

  export type hospitalsUpdateOneRequiredWithoutTreatment_typesNestedInput = {
    create?: XOR<hospitalsCreateWithoutTreatment_typesInput, hospitalsUncheckedCreateWithoutTreatment_typesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutTreatment_typesInput
    upsert?: hospitalsUpsertWithoutTreatment_typesInput
    connect?: hospitalsWhereUniqueInput
    update?: XOR<XOR<hospitalsUpdateToOneWithWhereWithoutTreatment_typesInput, hospitalsUpdateWithoutTreatment_typesInput>, hospitalsUncheckedUpdateWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesUncheckedUpdateManyWithoutTreatment_typesNestedInput = {
    create?: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput> | sub_treatment_typesCreateWithoutTreatment_typesInput[] | sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput[]
    connectOrCreate?: sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput | sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput[]
    upsert?: sub_treatment_typesUpsertWithWhereUniqueWithoutTreatment_typesInput | sub_treatment_typesUpsertWithWhereUniqueWithoutTreatment_typesInput[]
    createMany?: sub_treatment_typesCreateManyTreatment_typesInputEnvelope
    set?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    disconnect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    delete?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    connect?: sub_treatment_typesWhereUniqueInput | sub_treatment_typesWhereUniqueInput[]
    update?: sub_treatment_typesUpdateWithWhereUniqueWithoutTreatment_typesInput | sub_treatment_typesUpdateWithWhereUniqueWithoutTreatment_typesInput[]
    updateMany?: sub_treatment_typesUpdateManyWithWhereWithoutTreatment_typesInput | sub_treatment_typesUpdateManyWithWhereWithoutTreatment_typesInput[]
    deleteMany?: sub_treatment_typesScalarWhereInput | sub_treatment_typesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hospitalsCreateWithoutDiagnosis_typesInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    doctors?: doctorsCreateNestedManyWithoutHospitalsInput
    patients?: patientsCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutDiagnosis_typesInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    doctors?: doctorsUncheckedCreateNestedManyWithoutHospitalsInput
    patients?: patientsUncheckedCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutDiagnosis_typesInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutDiagnosis_typesInput, hospitalsUncheckedCreateWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesCreateWithoutDiagnosis_typesInput = {
    opd_diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd: opdCreateNestedOneWithoutOpd_diagnosis_typesInput
  }

  export type opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput = {
    opd_diagnosis_type_id: number
    opd_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type opd_diagnosis_typesCreateOrConnectWithoutDiagnosis_typesInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    create: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesCreateManyDiagnosis_typesInputEnvelope = {
    data: opd_diagnosis_typesCreateManyDiagnosis_typesInput | opd_diagnosis_typesCreateManyDiagnosis_typesInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsUpsertWithoutDiagnosis_typesInput = {
    update: XOR<hospitalsUpdateWithoutDiagnosis_typesInput, hospitalsUncheckedUpdateWithoutDiagnosis_typesInput>
    create: XOR<hospitalsCreateWithoutDiagnosis_typesInput, hospitalsUncheckedCreateWithoutDiagnosis_typesInput>
    where?: hospitalsWhereInput
  }

  export type hospitalsUpdateToOneWithWhereWithoutDiagnosis_typesInput = {
    where?: hospitalsWhereInput
    data: XOR<hospitalsUpdateWithoutDiagnosis_typesInput, hospitalsUncheckedUpdateWithoutDiagnosis_typesInput>
  }

  export type hospitalsUpdateWithoutDiagnosis_typesInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doctors?: doctorsUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutDiagnosis_typesInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doctors?: doctorsUncheckedUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUncheckedUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type opd_diagnosis_typesUpsertWithWhereUniqueWithoutDiagnosis_typesInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    update: XOR<opd_diagnosis_typesUpdateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedUpdateWithoutDiagnosis_typesInput>
    create: XOR<opd_diagnosis_typesCreateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedCreateWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesUpdateWithWhereUniqueWithoutDiagnosis_typesInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    data: XOR<opd_diagnosis_typesUpdateWithoutDiagnosis_typesInput, opd_diagnosis_typesUncheckedUpdateWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesUpdateManyWithWhereWithoutDiagnosis_typesInput = {
    where: opd_diagnosis_typesScalarWhereInput
    data: XOR<opd_diagnosis_typesUpdateManyMutationInput, opd_diagnosis_typesUncheckedUpdateManyWithoutDiagnosis_typesInput>
  }

  export type opd_diagnosis_typesScalarWhereInput = {
    AND?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
    OR?: opd_diagnosis_typesScalarWhereInput[]
    NOT?: opd_diagnosis_typesScalarWhereInput | opd_diagnosis_typesScalarWhereInput[]
    opd_diagnosis_type_id?: IntFilter<"opd_diagnosis_types"> | number
    opd_id?: IntFilter<"opd_diagnosis_types"> | number
    diagnosis_type_id?: IntFilter<"opd_diagnosis_types"> | number
    description?: StringNullableFilter<"opd_diagnosis_types"> | string | null
    user_id?: IntFilter<"opd_diagnosis_types"> | number
    created?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"opd_diagnosis_types"> | Date | string
  }

  export type hospitalsCreateWithoutDoctorsInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesCreateNestedManyWithoutHospitalsInput
    patients?: patientsCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutDoctorsInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesUncheckedCreateNestedManyWithoutHospitalsInput
    patients?: patientsUncheckedCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutDoctorsInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutDoctorsInput, hospitalsUncheckedCreateWithoutDoctorsInput>
  }

  export type opdCreateWithoutDoctorsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    patients: patientsCreateNestedOneWithoutOpdInput
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutOpdInput
    receipts?: receiptsCreateNestedManyWithoutOpdInput
  }

  export type opdUncheckedCreateWithoutDoctorsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutOpdInput
    receipts?: receiptsUncheckedCreateNestedManyWithoutOpdInput
  }

  export type opdCreateOrConnectWithoutDoctorsInput = {
    where: opdWhereUniqueInput
    create: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput>
  }

  export type opdCreateManyDoctorsInputEnvelope = {
    data: opdCreateManyDoctorsInput | opdCreateManyDoctorsInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsUpsertWithoutDoctorsInput = {
    update: XOR<hospitalsUpdateWithoutDoctorsInput, hospitalsUncheckedUpdateWithoutDoctorsInput>
    create: XOR<hospitalsCreateWithoutDoctorsInput, hospitalsUncheckedCreateWithoutDoctorsInput>
    where?: hospitalsWhereInput
  }

  export type hospitalsUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: hospitalsWhereInput
    data: XOR<hospitalsUpdateWithoutDoctorsInput, hospitalsUncheckedUpdateWithoutDoctorsInput>
  }

  export type hospitalsUpdateWithoutDoctorsInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutDoctorsInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUncheckedUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUncheckedUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type opdUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: opdWhereUniqueInput
    update: XOR<opdUpdateWithoutDoctorsInput, opdUncheckedUpdateWithoutDoctorsInput>
    create: XOR<opdCreateWithoutDoctorsInput, opdUncheckedCreateWithoutDoctorsInput>
  }

  export type opdUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: opdWhereUniqueInput
    data: XOR<opdUpdateWithoutDoctorsInput, opdUncheckedUpdateWithoutDoctorsInput>
  }

  export type opdUpdateManyWithWhereWithoutDoctorsInput = {
    where: opdScalarWhereInput
    data: XOR<opdUpdateManyMutationInput, opdUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type opdScalarWhereInput = {
    AND?: opdScalarWhereInput | opdScalarWhereInput[]
    OR?: opdScalarWhereInput[]
    NOT?: opdScalarWhereInput | opdScalarWhereInput[]
    opd_id?: IntFilter<"opd"> | number
    opd_no?: StringNullableFilter<"opd"> | string | null
    opd_datetime?: DateTimeFilter<"opd"> | Date | string
    patient_id?: IntFilter<"opd"> | number
    is_follow_up_case?: BoolFilter<"opd"> | boolean
    treated_by_doctor_id?: IntFilter<"opd"> | number
    registration_fee?: DecimalFilter<"opd"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"opd"> | string | null
    user_id?: IntFilter<"opd"> | number
    created?: DateTimeFilter<"opd"> | Date | string
    modified?: DateTimeFilter<"opd"> | Date | string
    old_opd_no?: StringNullableFilter<"opd"> | string | null
  }

  export type diagnosis_typesCreateWithoutHospitalsInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutDiagnosis_typesInput
  }

  export type diagnosis_typesUncheckedCreateWithoutHospitalsInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutDiagnosis_typesInput
  }

  export type diagnosis_typesCreateOrConnectWithoutHospitalsInput = {
    where: diagnosis_typesWhereUniqueInput
    create: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput>
  }

  export type diagnosis_typesCreateManyHospitalsInputEnvelope = {
    data: diagnosis_typesCreateManyHospitalsInput | diagnosis_typesCreateManyHospitalsInput[]
    skipDuplicates?: boolean
  }

  export type doctorsCreateWithoutHospitalsInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd?: opdCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateWithoutHospitalsInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    opd?: opdUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsCreateOrConnectWithoutHospitalsInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput>
  }

  export type doctorsCreateManyHospitalsInputEnvelope = {
    data: doctorsCreateManyHospitalsInput | doctorsCreateManyHospitalsInput[]
    skipDuplicates?: boolean
  }

  export type patientsCreateWithoutHospitalsInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
    opd?: opdCreateNestedManyWithoutPatientsInput
  }

  export type patientsUncheckedCreateWithoutHospitalsInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
    opd?: opdUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type patientsCreateOrConnectWithoutHospitalsInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput>
  }

  export type patientsCreateManyHospitalsInputEnvelope = {
    data: patientsCreateManyHospitalsInput | patientsCreateManyHospitalsInput[]
    skipDuplicates?: boolean
  }

  export type treatment_typesCreateWithoutHospitalsInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types?: sub_treatment_typesCreateNestedManyWithoutTreatment_typesInput
  }

  export type treatment_typesUncheckedCreateWithoutHospitalsInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types?: sub_treatment_typesUncheckedCreateNestedManyWithoutTreatment_typesInput
  }

  export type treatment_typesCreateOrConnectWithoutHospitalsInput = {
    where: treatment_typesWhereUniqueInput
    create: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput>
  }

  export type treatment_typesCreateManyHospitalsInputEnvelope = {
    data: treatment_typesCreateManyHospitalsInput | treatment_typesCreateManyHospitalsInput[]
    skipDuplicates?: boolean
  }

  export type diagnosis_typesUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: diagnosis_typesWhereUniqueInput
    update: XOR<diagnosis_typesUpdateWithoutHospitalsInput, diagnosis_typesUncheckedUpdateWithoutHospitalsInput>
    create: XOR<diagnosis_typesCreateWithoutHospitalsInput, diagnosis_typesUncheckedCreateWithoutHospitalsInput>
  }

  export type diagnosis_typesUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: diagnosis_typesWhereUniqueInput
    data: XOR<diagnosis_typesUpdateWithoutHospitalsInput, diagnosis_typesUncheckedUpdateWithoutHospitalsInput>
  }

  export type diagnosis_typesUpdateManyWithWhereWithoutHospitalsInput = {
    where: diagnosis_typesScalarWhereInput
    data: XOR<diagnosis_typesUpdateManyMutationInput, diagnosis_typesUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type diagnosis_typesScalarWhereInput = {
    AND?: diagnosis_typesScalarWhereInput | diagnosis_typesScalarWhereInput[]
    OR?: diagnosis_typesScalarWhereInput[]
    NOT?: diagnosis_typesScalarWhereInput | diagnosis_typesScalarWhereInput[]
    diagnosis_type_id?: IntFilter<"diagnosis_types"> | number
    diagnosis_type_name?: StringFilter<"diagnosis_types"> | string
    diagnosis_type_short_name?: StringNullableFilter<"diagnosis_types"> | string | null
    is_active?: BoolFilter<"diagnosis_types"> | boolean
    hospital_id?: IntFilter<"diagnosis_types"> | number
    description?: StringNullableFilter<"diagnosis_types"> | string | null
    user_id?: IntFilter<"diagnosis_types"> | number
    created?: DateTimeFilter<"diagnosis_types"> | Date | string
    modified?: DateTimeFilter<"diagnosis_types"> | Date | string
  }

  export type doctorsUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: doctorsWhereUniqueInput
    update: XOR<doctorsUpdateWithoutHospitalsInput, doctorsUncheckedUpdateWithoutHospitalsInput>
    create: XOR<doctorsCreateWithoutHospitalsInput, doctorsUncheckedCreateWithoutHospitalsInput>
  }

  export type doctorsUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: doctorsWhereUniqueInput
    data: XOR<doctorsUpdateWithoutHospitalsInput, doctorsUncheckedUpdateWithoutHospitalsInput>
  }

  export type doctorsUpdateManyWithWhereWithoutHospitalsInput = {
    where: doctorsScalarWhereInput
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type doctorsScalarWhereInput = {
    AND?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
    OR?: doctorsScalarWhereInput[]
    NOT?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
    doctor_id?: IntFilter<"doctors"> | number
    doctor_name?: StringFilter<"doctors"> | string
    staff_id?: IntNullableFilter<"doctors"> | number | null
    student_id?: IntNullableFilter<"doctors"> | number | null
    hospital_id?: IntFilter<"doctors"> | number
    mobile_no?: StringNullableFilter<"doctors"> | string | null
    email?: StringNullableFilter<"doctors"> | string | null
    specialization?: StringNullableFilter<"doctors"> | string | null
    description?: StringNullableFilter<"doctors"> | string | null
    user_id?: IntFilter<"doctors"> | number
    created?: DateTimeFilter<"doctors"> | Date | string
    modified?: DateTimeFilter<"doctors"> | Date | string
  }

  export type patientsUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: patientsWhereUniqueInput
    update: XOR<patientsUpdateWithoutHospitalsInput, patientsUncheckedUpdateWithoutHospitalsInput>
    create: XOR<patientsCreateWithoutHospitalsInput, patientsUncheckedCreateWithoutHospitalsInput>
  }

  export type patientsUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: patientsWhereUniqueInput
    data: XOR<patientsUpdateWithoutHospitalsInput, patientsUncheckedUpdateWithoutHospitalsInput>
  }

  export type patientsUpdateManyWithWhereWithoutHospitalsInput = {
    where: patientsScalarWhereInput
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type patientsScalarWhereInput = {
    AND?: patientsScalarWhereInput | patientsScalarWhereInput[]
    OR?: patientsScalarWhereInput[]
    NOT?: patientsScalarWhereInput | patientsScalarWhereInput[]
    patient_id?: IntFilter<"patients"> | number
    patient_name?: StringFilter<"patients"> | string
    patient_no?: IntFilter<"patients"> | number
    registration_datetime?: DateTimeFilter<"patients"> | Date | string
    age?: IntNullableFilter<"patients"> | number | null
    blood_group?: StringNullableFilter<"patients"> | string | null
    gender?: StringFilter<"patients"> | string
    occupation?: StringNullableFilter<"patients"> | string | null
    address?: StringNullableFilter<"patients"> | string | null
    hospital_id?: IntFilter<"patients"> | number
    state_id?: IntNullableFilter<"patients"> | number | null
    city_id?: IntNullableFilter<"patients"> | number | null
    pin_code?: StringNullableFilter<"patients"> | string | null
    mobile_no?: StringFilter<"patients"> | string
    referred_by?: StringNullableFilter<"patients"> | string | null
    description?: StringNullableFilter<"patients"> | string | null
    user_id?: IntFilter<"patients"> | number
    created?: DateTimeFilter<"patients"> | Date | string
    modified?: DateTimeFilter<"patients"> | Date | string
    emergency_contact_no?: StringNullableFilter<"patients"> | string | null
  }

  export type treatment_typesUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: treatment_typesWhereUniqueInput
    update: XOR<treatment_typesUpdateWithoutHospitalsInput, treatment_typesUncheckedUpdateWithoutHospitalsInput>
    create: XOR<treatment_typesCreateWithoutHospitalsInput, treatment_typesUncheckedCreateWithoutHospitalsInput>
  }

  export type treatment_typesUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: treatment_typesWhereUniqueInput
    data: XOR<treatment_typesUpdateWithoutHospitalsInput, treatment_typesUncheckedUpdateWithoutHospitalsInput>
  }

  export type treatment_typesUpdateManyWithWhereWithoutHospitalsInput = {
    where: treatment_typesScalarWhereInput
    data: XOR<treatment_typesUpdateManyMutationInput, treatment_typesUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type treatment_typesScalarWhereInput = {
    AND?: treatment_typesScalarWhereInput | treatment_typesScalarWhereInput[]
    OR?: treatment_typesScalarWhereInput[]
    NOT?: treatment_typesScalarWhereInput | treatment_typesScalarWhereInput[]
    treatment_type_id?: IntFilter<"treatment_types"> | number
    treatment_type_name?: StringFilter<"treatment_types"> | string
    treatment_type_short_name?: StringNullableFilter<"treatment_types"> | string | null
    hospital_id?: IntFilter<"treatment_types"> | number
    description?: StringNullableFilter<"treatment_types"> | string | null
    user_id?: IntFilter<"treatment_types"> | number
    created?: DateTimeFilter<"treatment_types"> | Date | string
    modified?: DateTimeFilter<"treatment_types"> | Date | string
  }

  export type doctorsCreateWithoutOpdInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    hospitals: hospitalsCreateNestedOneWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateWithoutOpdInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    hospital_id: number
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type doctorsCreateOrConnectWithoutOpdInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutOpdInput, doctorsUncheckedCreateWithoutOpdInput>
  }

  export type patientsCreateWithoutOpdInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
    hospitals: hospitalsCreateNestedOneWithoutPatientsInput
  }

  export type patientsUncheckedCreateWithoutOpdInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    hospital_id: number
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
  }

  export type patientsCreateOrConnectWithoutOpdInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutOpdInput, patientsUncheckedCreateWithoutOpdInput>
  }

  export type opd_diagnosis_typesCreateWithoutOpdInput = {
    opd_diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    diagnosis_types: diagnosis_typesCreateNestedOneWithoutOpd_diagnosis_typesInput
  }

  export type opd_diagnosis_typesUncheckedCreateWithoutOpdInput = {
    opd_diagnosis_type_id: number
    diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type opd_diagnosis_typesCreateOrConnectWithoutOpdInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    create: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput>
  }

  export type opd_diagnosis_typesCreateManyOpdInputEnvelope = {
    data: opd_diagnosis_typesCreateManyOpdInput | opd_diagnosis_typesCreateManyOpdInput[]
    skipDuplicates?: boolean
  }

  export type receiptsCreateWithoutOpdInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
    receipt_tran?: receipt_tranCreateNestedManyWithoutReceiptsInput
  }

  export type receiptsUncheckedCreateWithoutOpdInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
    receipt_tran?: receipt_tranUncheckedCreateNestedManyWithoutReceiptsInput
  }

  export type receiptsCreateOrConnectWithoutOpdInput = {
    where: receiptsWhereUniqueInput
    create: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput>
  }

  export type receiptsCreateManyOpdInputEnvelope = {
    data: receiptsCreateManyOpdInput | receiptsCreateManyOpdInput[]
    skipDuplicates?: boolean
  }

  export type doctorsUpsertWithoutOpdInput = {
    update: XOR<doctorsUpdateWithoutOpdInput, doctorsUncheckedUpdateWithoutOpdInput>
    create: XOR<doctorsCreateWithoutOpdInput, doctorsUncheckedCreateWithoutOpdInput>
    where?: doctorsWhereInput
  }

  export type doctorsUpdateToOneWithWhereWithoutOpdInput = {
    where?: doctorsWhereInput
    data: XOR<doctorsUpdateWithoutOpdInput, doctorsUncheckedUpdateWithoutOpdInput>
  }

  export type doctorsUpdateWithoutOpdInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitals?: hospitalsUpdateOneRequiredWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateWithoutOpdInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsUpsertWithoutOpdInput = {
    update: XOR<patientsUpdateWithoutOpdInput, patientsUncheckedUpdateWithoutOpdInput>
    create: XOR<patientsCreateWithoutOpdInput, patientsUncheckedCreateWithoutOpdInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutOpdInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutOpdInput, patientsUncheckedUpdateWithoutOpdInput>
  }

  export type patientsUpdateWithoutOpdInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    hospitals?: hospitalsUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateWithoutOpdInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type opd_diagnosis_typesUpsertWithWhereUniqueWithoutOpdInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    update: XOR<opd_diagnosis_typesUpdateWithoutOpdInput, opd_diagnosis_typesUncheckedUpdateWithoutOpdInput>
    create: XOR<opd_diagnosis_typesCreateWithoutOpdInput, opd_diagnosis_typesUncheckedCreateWithoutOpdInput>
  }

  export type opd_diagnosis_typesUpdateWithWhereUniqueWithoutOpdInput = {
    where: opd_diagnosis_typesWhereUniqueInput
    data: XOR<opd_diagnosis_typesUpdateWithoutOpdInput, opd_diagnosis_typesUncheckedUpdateWithoutOpdInput>
  }

  export type opd_diagnosis_typesUpdateManyWithWhereWithoutOpdInput = {
    where: opd_diagnosis_typesScalarWhereInput
    data: XOR<opd_diagnosis_typesUpdateManyMutationInput, opd_diagnosis_typesUncheckedUpdateManyWithoutOpdInput>
  }

  export type receiptsUpsertWithWhereUniqueWithoutOpdInput = {
    where: receiptsWhereUniqueInput
    update: XOR<receiptsUpdateWithoutOpdInput, receiptsUncheckedUpdateWithoutOpdInput>
    create: XOR<receiptsCreateWithoutOpdInput, receiptsUncheckedCreateWithoutOpdInput>
  }

  export type receiptsUpdateWithWhereUniqueWithoutOpdInput = {
    where: receiptsWhereUniqueInput
    data: XOR<receiptsUpdateWithoutOpdInput, receiptsUncheckedUpdateWithoutOpdInput>
  }

  export type receiptsUpdateManyWithWhereWithoutOpdInput = {
    where: receiptsScalarWhereInput
    data: XOR<receiptsUpdateManyMutationInput, receiptsUncheckedUpdateManyWithoutOpdInput>
  }

  export type receiptsScalarWhereInput = {
    AND?: receiptsScalarWhereInput | receiptsScalarWhereInput[]
    OR?: receiptsScalarWhereInput[]
    NOT?: receiptsScalarWhereInput | receiptsScalarWhereInput[]
    receipt_id?: IntFilter<"receipts"> | number
    receipt_no?: StringNullableFilter<"receipts"> | string | null
    receipt_date?: DateTimeFilter<"receipts"> | Date | string
    opd_id?: IntFilter<"receipts"> | number
    amount_paid?: DecimalFilter<"receipts"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipts"> | string | null
    user_id?: IntFilter<"receipts"> | number
    created?: DateTimeFilter<"receipts"> | Date | string
    modified?: DateTimeFilter<"receipts"> | Date | string
    payment_mode_id?: IntFilter<"receipts"> | number
    reference_no?: StringNullableFilter<"receipts"> | string | null
    reference_date?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_datetime?: DateTimeNullableFilter<"receipts"> | Date | string | null
    cancellation_by_user_id?: IntNullableFilter<"receipts"> | number | null
    cancellation_remarks?: StringNullableFilter<"receipts"> | string | null
  }

  export type diagnosis_typesCreateWithoutOpd_diagnosis_typesInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    hospitals: hospitalsCreateNestedOneWithoutDiagnosis_typesInput
  }

  export type diagnosis_typesUncheckedCreateWithoutOpd_diagnosis_typesInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type diagnosis_typesCreateOrConnectWithoutOpd_diagnosis_typesInput = {
    where: diagnosis_typesWhereUniqueInput
    create: XOR<diagnosis_typesCreateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedCreateWithoutOpd_diagnosis_typesInput>
  }

  export type opdCreateWithoutOpd_diagnosis_typesInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    doctors: doctorsCreateNestedOneWithoutOpdInput
    patients: patientsCreateNestedOneWithoutOpdInput
    receipts?: receiptsCreateNestedManyWithoutOpdInput
  }

  export type opdUncheckedCreateWithoutOpd_diagnosis_typesInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    receipts?: receiptsUncheckedCreateNestedManyWithoutOpdInput
  }

  export type opdCreateOrConnectWithoutOpd_diagnosis_typesInput = {
    where: opdWhereUniqueInput
    create: XOR<opdCreateWithoutOpd_diagnosis_typesInput, opdUncheckedCreateWithoutOpd_diagnosis_typesInput>
  }

  export type diagnosis_typesUpsertWithoutOpd_diagnosis_typesInput = {
    update: XOR<diagnosis_typesUpdateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedUpdateWithoutOpd_diagnosis_typesInput>
    create: XOR<diagnosis_typesCreateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedCreateWithoutOpd_diagnosis_typesInput>
    where?: diagnosis_typesWhereInput
  }

  export type diagnosis_typesUpdateToOneWithWhereWithoutOpd_diagnosis_typesInput = {
    where?: diagnosis_typesWhereInput
    data: XOR<diagnosis_typesUpdateWithoutOpd_diagnosis_typesInput, diagnosis_typesUncheckedUpdateWithoutOpd_diagnosis_typesInput>
  }

  export type diagnosis_typesUpdateWithoutOpd_diagnosis_typesInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitals?: hospitalsUpdateOneRequiredWithoutDiagnosis_typesNestedInput
  }

  export type diagnosis_typesUncheckedUpdateWithoutOpd_diagnosis_typesInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opdUpsertWithoutOpd_diagnosis_typesInput = {
    update: XOR<opdUpdateWithoutOpd_diagnosis_typesInput, opdUncheckedUpdateWithoutOpd_diagnosis_typesInput>
    create: XOR<opdCreateWithoutOpd_diagnosis_typesInput, opdUncheckedCreateWithoutOpd_diagnosis_typesInput>
    where?: opdWhereInput
  }

  export type opdUpdateToOneWithWhereWithoutOpd_diagnosis_typesInput = {
    where?: opdWhereInput
    data: XOR<opdUpdateWithoutOpd_diagnosis_typesInput, opdUncheckedUpdateWithoutOpd_diagnosis_typesInput>
  }

  export type opdUpdateWithoutOpd_diagnosis_typesInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: doctorsUpdateOneRequiredWithoutOpdNestedInput
    patients?: patientsUpdateOneRequiredWithoutOpdNestedInput
    receipts?: receiptsUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateWithoutOpd_diagnosis_typesInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipts?: receiptsUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type opdCreateWithoutPatientsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    doctors: doctorsCreateNestedOneWithoutOpdInput
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutOpdInput
    receipts?: receiptsCreateNestedManyWithoutOpdInput
  }

  export type opdUncheckedCreateWithoutPatientsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutOpdInput
    receipts?: receiptsUncheckedCreateNestedManyWithoutOpdInput
  }

  export type opdCreateOrConnectWithoutPatientsInput = {
    where: opdWhereUniqueInput
    create: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput>
  }

  export type opdCreateManyPatientsInputEnvelope = {
    data: opdCreateManyPatientsInput | opdCreateManyPatientsInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsCreateWithoutPatientsInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutPatientsInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesUncheckedCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsUncheckedCreateNestedManyWithoutHospitalsInput
    treatment_types?: treatment_typesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutPatientsInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutPatientsInput, hospitalsUncheckedCreateWithoutPatientsInput>
  }

  export type opdUpsertWithWhereUniqueWithoutPatientsInput = {
    where: opdWhereUniqueInput
    update: XOR<opdUpdateWithoutPatientsInput, opdUncheckedUpdateWithoutPatientsInput>
    create: XOR<opdCreateWithoutPatientsInput, opdUncheckedCreateWithoutPatientsInput>
  }

  export type opdUpdateWithWhereUniqueWithoutPatientsInput = {
    where: opdWhereUniqueInput
    data: XOR<opdUpdateWithoutPatientsInput, opdUncheckedUpdateWithoutPatientsInput>
  }

  export type opdUpdateManyWithWhereWithoutPatientsInput = {
    where: opdScalarWhereInput
    data: XOR<opdUpdateManyMutationInput, opdUncheckedUpdateManyWithoutPatientsInput>
  }

  export type hospitalsUpsertWithoutPatientsInput = {
    update: XOR<hospitalsUpdateWithoutPatientsInput, hospitalsUncheckedUpdateWithoutPatientsInput>
    create: XOR<hospitalsCreateWithoutPatientsInput, hospitalsUncheckedCreateWithoutPatientsInput>
    where?: hospitalsWhereInput
  }

  export type hospitalsUpdateToOneWithWhereWithoutPatientsInput = {
    where?: hospitalsWhereInput
    data: XOR<hospitalsUpdateWithoutPatientsInput, hospitalsUncheckedUpdateWithoutPatientsInput>
  }

  export type hospitalsUpdateWithoutPatientsInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutPatientsInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUncheckedUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUncheckedUpdateManyWithoutHospitalsNestedInput
    treatment_types?: treatment_typesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type sub_treatment_typesCreateWithoutReceipt_tranInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
    treatment_types: treatment_typesCreateNestedOneWithoutSub_treatment_typesInput
  }

  export type sub_treatment_typesUncheckedCreateWithoutReceipt_tranInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    treatment_type_id: number
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
  }

  export type sub_treatment_typesCreateOrConnectWithoutReceipt_tranInput = {
    where: sub_treatment_typesWhereUniqueInput
    create: XOR<sub_treatment_typesCreateWithoutReceipt_tranInput, sub_treatment_typesUncheckedCreateWithoutReceipt_tranInput>
  }

  export type receiptsCreateWithoutReceipt_tranInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
    opd: opdCreateNestedOneWithoutReceiptsInput
  }

  export type receiptsUncheckedCreateWithoutReceipt_tranInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    opd_id: number
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
  }

  export type receiptsCreateOrConnectWithoutReceipt_tranInput = {
    where: receiptsWhereUniqueInput
    create: XOR<receiptsCreateWithoutReceipt_tranInput, receiptsUncheckedCreateWithoutReceipt_tranInput>
  }

  export type sub_treatment_typesUpsertWithoutReceipt_tranInput = {
    update: XOR<sub_treatment_typesUpdateWithoutReceipt_tranInput, sub_treatment_typesUncheckedUpdateWithoutReceipt_tranInput>
    create: XOR<sub_treatment_typesCreateWithoutReceipt_tranInput, sub_treatment_typesUncheckedCreateWithoutReceipt_tranInput>
    where?: sub_treatment_typesWhereInput
  }

  export type sub_treatment_typesUpdateToOneWithWhereWithoutReceipt_tranInput = {
    where?: sub_treatment_typesWhereInput
    data: XOR<sub_treatment_typesUpdateWithoutReceipt_tranInput, sub_treatment_typesUncheckedUpdateWithoutReceipt_tranInput>
  }

  export type sub_treatment_typesUpdateWithoutReceipt_tranInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_types?: treatment_typesUpdateOneRequiredWithoutSub_treatment_typesNestedInput
  }

  export type sub_treatment_typesUncheckedUpdateWithoutReceipt_tranInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptsUpsertWithoutReceipt_tranInput = {
    update: XOR<receiptsUpdateWithoutReceipt_tranInput, receiptsUncheckedUpdateWithoutReceipt_tranInput>
    create: XOR<receiptsCreateWithoutReceipt_tranInput, receiptsUncheckedCreateWithoutReceipt_tranInput>
    where?: receiptsWhereInput
  }

  export type receiptsUpdateToOneWithWhereWithoutReceipt_tranInput = {
    where?: receiptsWhereInput
    data: XOR<receiptsUpdateWithoutReceipt_tranInput, receiptsUncheckedUpdateWithoutReceipt_tranInput>
  }

  export type receiptsUpdateWithoutReceipt_tranInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
    opd?: opdUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type receiptsUncheckedUpdateWithoutReceipt_tranInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_id?: IntFieldUpdateOperationsInput | number
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receipt_tranCreateWithoutReceiptsInput = {
    receipt_tran_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    sub_treatment_types: sub_treatment_typesCreateNestedOneWithoutReceipt_tranInput
  }

  export type receipt_tranUncheckedCreateWithoutReceiptsInput = {
    receipt_tran_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranCreateOrConnectWithoutReceiptsInput = {
    where: receipt_tranWhereUniqueInput
    create: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput>
  }

  export type receipt_tranCreateManyReceiptsInputEnvelope = {
    data: receipt_tranCreateManyReceiptsInput | receipt_tranCreateManyReceiptsInput[]
    skipDuplicates?: boolean
  }

  export type opdCreateWithoutReceiptsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    doctors: doctorsCreateNestedOneWithoutOpdInput
    patients: patientsCreateNestedOneWithoutOpdInput
    opd_diagnosis_types?: opd_diagnosis_typesCreateNestedManyWithoutOpdInput
  }

  export type opdUncheckedCreateWithoutReceiptsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedCreateNestedManyWithoutOpdInput
  }

  export type opdCreateOrConnectWithoutReceiptsInput = {
    where: opdWhereUniqueInput
    create: XOR<opdCreateWithoutReceiptsInput, opdUncheckedCreateWithoutReceiptsInput>
  }

  export type receipt_tranUpsertWithWhereUniqueWithoutReceiptsInput = {
    where: receipt_tranWhereUniqueInput
    update: XOR<receipt_tranUpdateWithoutReceiptsInput, receipt_tranUncheckedUpdateWithoutReceiptsInput>
    create: XOR<receipt_tranCreateWithoutReceiptsInput, receipt_tranUncheckedCreateWithoutReceiptsInput>
  }

  export type receipt_tranUpdateWithWhereUniqueWithoutReceiptsInput = {
    where: receipt_tranWhereUniqueInput
    data: XOR<receipt_tranUpdateWithoutReceiptsInput, receipt_tranUncheckedUpdateWithoutReceiptsInput>
  }

  export type receipt_tranUpdateManyWithWhereWithoutReceiptsInput = {
    where: receipt_tranScalarWhereInput
    data: XOR<receipt_tranUpdateManyMutationInput, receipt_tranUncheckedUpdateManyWithoutReceiptsInput>
  }

  export type receipt_tranScalarWhereInput = {
    AND?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
    OR?: receipt_tranScalarWhereInput[]
    NOT?: receipt_tranScalarWhereInput | receipt_tranScalarWhereInput[]
    receipt_tran_id?: IntFilter<"receipt_tran"> | number
    receipt_id?: IntFilter<"receipt_tran"> | number
    sub_treatment_type_id?: IntFilter<"receipt_tran"> | number
    quantity?: IntFilter<"receipt_tran"> | number
    rate?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"receipt_tran"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"receipt_tran"> | string | null
    user_id?: IntFilter<"receipt_tran"> | number
    created?: DateTimeFilter<"receipt_tran"> | Date | string
    modified?: DateTimeFilter<"receipt_tran"> | Date | string
  }

  export type opdUpsertWithoutReceiptsInput = {
    update: XOR<opdUpdateWithoutReceiptsInput, opdUncheckedUpdateWithoutReceiptsInput>
    create: XOR<opdCreateWithoutReceiptsInput, opdUncheckedCreateWithoutReceiptsInput>
    where?: opdWhereInput
  }

  export type opdUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: opdWhereInput
    data: XOR<opdUpdateWithoutReceiptsInput, opdUncheckedUpdateWithoutReceiptsInput>
  }

  export type opdUpdateWithoutReceiptsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: doctorsUpdateOneRequiredWithoutOpdNestedInput
    patients?: patientsUpdateOneRequiredWithoutOpdNestedInput
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateWithoutReceiptsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type receipt_tranCreateWithoutSub_treatment_typesInput = {
    receipt_tran_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    receipts: receiptsCreateNestedOneWithoutReceipt_tranInput
  }

  export type receipt_tranUncheckedCreateWithoutSub_treatment_typesInput = {
    receipt_tran_id: number
    receipt_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranCreateOrConnectWithoutSub_treatment_typesInput = {
    where: receipt_tranWhereUniqueInput
    create: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput>
  }

  export type receipt_tranCreateManySub_treatment_typesInputEnvelope = {
    data: receipt_tranCreateManySub_treatment_typesInput | receipt_tranCreateManySub_treatment_typesInput[]
    skipDuplicates?: boolean
  }

  export type treatment_typesCreateWithoutSub_treatment_typesInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    hospitals: hospitalsCreateNestedOneWithoutTreatment_typesInput
  }

  export type treatment_typesUncheckedCreateWithoutSub_treatment_typesInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    hospital_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type treatment_typesCreateOrConnectWithoutSub_treatment_typesInput = {
    where: treatment_typesWhereUniqueInput
    create: XOR<treatment_typesCreateWithoutSub_treatment_typesInput, treatment_typesUncheckedCreateWithoutSub_treatment_typesInput>
  }

  export type receipt_tranUpsertWithWhereUniqueWithoutSub_treatment_typesInput = {
    where: receipt_tranWhereUniqueInput
    update: XOR<receipt_tranUpdateWithoutSub_treatment_typesInput, receipt_tranUncheckedUpdateWithoutSub_treatment_typesInput>
    create: XOR<receipt_tranCreateWithoutSub_treatment_typesInput, receipt_tranUncheckedCreateWithoutSub_treatment_typesInput>
  }

  export type receipt_tranUpdateWithWhereUniqueWithoutSub_treatment_typesInput = {
    where: receipt_tranWhereUniqueInput
    data: XOR<receipt_tranUpdateWithoutSub_treatment_typesInput, receipt_tranUncheckedUpdateWithoutSub_treatment_typesInput>
  }

  export type receipt_tranUpdateManyWithWhereWithoutSub_treatment_typesInput = {
    where: receipt_tranScalarWhereInput
    data: XOR<receipt_tranUpdateManyMutationInput, receipt_tranUncheckedUpdateManyWithoutSub_treatment_typesInput>
  }

  export type treatment_typesUpsertWithoutSub_treatment_typesInput = {
    update: XOR<treatment_typesUpdateWithoutSub_treatment_typesInput, treatment_typesUncheckedUpdateWithoutSub_treatment_typesInput>
    create: XOR<treatment_typesCreateWithoutSub_treatment_typesInput, treatment_typesUncheckedCreateWithoutSub_treatment_typesInput>
    where?: treatment_typesWhereInput
  }

  export type treatment_typesUpdateToOneWithWhereWithoutSub_treatment_typesInput = {
    where?: treatment_typesWhereInput
    data: XOR<treatment_typesUpdateWithoutSub_treatment_typesInput, treatment_typesUncheckedUpdateWithoutSub_treatment_typesInput>
  }

  export type treatment_typesUpdateWithoutSub_treatment_typesInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitals?: hospitalsUpdateOneRequiredWithoutTreatment_typesNestedInput
  }

  export type treatment_typesUncheckedUpdateWithoutSub_treatment_typesInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_treatment_typesCreateWithoutTreatment_typesInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
    receipt_tran?: receipt_tranCreateNestedManyWithoutSub_treatment_typesInput
  }

  export type sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
    receipt_tran?: receipt_tranUncheckedCreateNestedManyWithoutSub_treatment_typesInput
  }

  export type sub_treatment_typesCreateOrConnectWithoutTreatment_typesInput = {
    where: sub_treatment_typesWhereUniqueInput
    create: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesCreateManyTreatment_typesInputEnvelope = {
    data: sub_treatment_typesCreateManyTreatment_typesInput | sub_treatment_typesCreateManyTreatment_typesInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsCreateWithoutTreatment_typesInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsCreateNestedManyWithoutHospitalsInput
    patients?: patientsCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutTreatment_typesInput = {
    hospital_id: number
    hospital_name: string
    default_payment_mode_id?: number | null
    registration_charge?: Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: number | null
    opening_date: Date | string
    opening_patient_no: number
    opening_opd_no: number
    opening_receipt_no: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    address?: string | null
    is_rate_enable_in_receipt?: boolean | null
    is_registration_fee_enable_in_opd?: boolean | null
    diagnosis_types?: diagnosis_typesUncheckedCreateNestedManyWithoutHospitalsInput
    doctors?: doctorsUncheckedCreateNestedManyWithoutHospitalsInput
    patients?: patientsUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutTreatment_typesInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutTreatment_typesInput, hospitalsUncheckedCreateWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesUpsertWithWhereUniqueWithoutTreatment_typesInput = {
    where: sub_treatment_typesWhereUniqueInput
    update: XOR<sub_treatment_typesUpdateWithoutTreatment_typesInput, sub_treatment_typesUncheckedUpdateWithoutTreatment_typesInput>
    create: XOR<sub_treatment_typesCreateWithoutTreatment_typesInput, sub_treatment_typesUncheckedCreateWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesUpdateWithWhereUniqueWithoutTreatment_typesInput = {
    where: sub_treatment_typesWhereUniqueInput
    data: XOR<sub_treatment_typesUpdateWithoutTreatment_typesInput, sub_treatment_typesUncheckedUpdateWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesUpdateManyWithWhereWithoutTreatment_typesInput = {
    where: sub_treatment_typesScalarWhereInput
    data: XOR<sub_treatment_typesUpdateManyMutationInput, sub_treatment_typesUncheckedUpdateManyWithoutTreatment_typesInput>
  }

  export type sub_treatment_typesScalarWhereInput = {
    AND?: sub_treatment_typesScalarWhereInput | sub_treatment_typesScalarWhereInput[]
    OR?: sub_treatment_typesScalarWhereInput[]
    NOT?: sub_treatment_typesScalarWhereInput | sub_treatment_typesScalarWhereInput[]
    sub_treatment_type_id?: IntFilter<"sub_treatment_types"> | number
    sub_treatment_type_name?: StringFilter<"sub_treatment_types"> | string
    treatment_type_id?: IntFilter<"sub_treatment_types"> | number
    rate?: DecimalFilter<"sub_treatment_types"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"sub_treatment_types"> | boolean
    description?: StringNullableFilter<"sub_treatment_types"> | string | null
    user_id?: IntFilter<"sub_treatment_types"> | number
    created?: DateTimeFilter<"sub_treatment_types"> | Date | string
    modified?: DateTimeFilter<"sub_treatment_types"> | Date | string
    account_id?: IntNullableFilter<"sub_treatment_types"> | number | null
  }

  export type hospitalsUpsertWithoutTreatment_typesInput = {
    update: XOR<hospitalsUpdateWithoutTreatment_typesInput, hospitalsUncheckedUpdateWithoutTreatment_typesInput>
    create: XOR<hospitalsCreateWithoutTreatment_typesInput, hospitalsUncheckedCreateWithoutTreatment_typesInput>
    where?: hospitalsWhereInput
  }

  export type hospitalsUpdateToOneWithWhereWithoutTreatment_typesInput = {
    where?: hospitalsWhereInput
    data: XOR<hospitalsUpdateWithoutTreatment_typesInput, hospitalsUncheckedUpdateWithoutTreatment_typesInput>
  }

  export type hospitalsUpdateWithoutTreatment_typesInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutTreatment_typesInput = {
    hospital_id?: IntFieldUpdateOperationsInput | number
    hospital_name?: StringFieldUpdateOperationsInput | string
    default_payment_mode_id?: NullableIntFieldUpdateOperationsInput | number | null
    registration_charge?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    registration_validity_months?: NullableIntFieldUpdateOperationsInput | number | null
    opening_date?: DateTimeFieldUpdateOperationsInput | Date | string
    opening_patient_no?: IntFieldUpdateOperationsInput | number
    opening_opd_no?: IntFieldUpdateOperationsInput | number
    opening_receipt_no?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_rate_enable_in_receipt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_registration_fee_enable_in_opd?: NullableBoolFieldUpdateOperationsInput | boolean | null
    diagnosis_types?: diagnosis_typesUncheckedUpdateManyWithoutHospitalsNestedInput
    doctors?: doctorsUncheckedUpdateManyWithoutHospitalsNestedInput
    patients?: patientsUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type opd_diagnosis_typesCreateManyDiagnosis_typesInput = {
    opd_diagnosis_type_id: number
    opd_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type opd_diagnosis_typesUpdateWithoutDiagnosis_typesInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd?: opdUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput
  }

  export type opd_diagnosis_typesUncheckedUpdateWithoutDiagnosis_typesInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    opd_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opd_diagnosis_typesUncheckedUpdateManyWithoutDiagnosis_typesInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    opd_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opdCreateManyDoctorsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    patient_id: number
    is_follow_up_case: boolean
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
  }

  export type opdUpdateWithoutDoctorsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: patientsUpdateOneRequiredWithoutOpdNestedInput
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateWithoutDoctorsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateManyWithoutDoctorsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: IntFieldUpdateOperationsInput | number
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type diagnosis_typesCreateManyHospitalsInput = {
    diagnosis_type_id: number
    diagnosis_type_name: string
    diagnosis_type_short_name?: string | null
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type doctorsCreateManyHospitalsInput = {
    doctor_id: number
    doctor_name: string
    staff_id?: number | null
    student_id?: number | null
    mobile_no?: string | null
    email?: string | null
    specialization?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type patientsCreateManyHospitalsInput = {
    patient_id: number
    patient_name: string
    patient_no: number
    registration_datetime: Date | string
    age?: number | null
    blood_group?: string | null
    gender: string
    occupation?: string | null
    address?: string | null
    state_id?: number | null
    city_id?: number | null
    pin_code?: string | null
    mobile_no: string
    referred_by?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    emergency_contact_no?: string | null
  }

  export type treatment_typesCreateManyHospitalsInput = {
    treatment_type_id: number
    treatment_type_name: string
    treatment_type_short_name?: string | null
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type diagnosis_typesUpdateWithoutHospitalsInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutDiagnosis_typesNestedInput
  }

  export type diagnosis_typesUncheckedUpdateWithoutHospitalsInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutDiagnosis_typesNestedInput
  }

  export type diagnosis_typesUncheckedUpdateManyWithoutHospitalsInput = {
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_name?: StringFieldUpdateOperationsInput | string
    diagnosis_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsUpdateWithoutHospitalsInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd?: opdUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateWithoutHospitalsInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    opd?: opdUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateManyWithoutHospitalsInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsUpdateWithoutHospitalsInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd?: opdUpdateManyWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateWithoutHospitalsInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd?: opdUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type patientsUncheckedUpdateManyWithoutHospitalsInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    patient_no?: IntFieldUpdateOperationsInput | number
    registration_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    pin_code?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: StringFieldUpdateOperationsInput | string
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type treatment_typesUpdateWithoutHospitalsInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUpdateManyWithoutTreatment_typesNestedInput
  }

  export type treatment_typesUncheckedUpdateWithoutHospitalsInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUncheckedUpdateManyWithoutTreatment_typesNestedInput
  }

  export type treatment_typesUncheckedUpdateManyWithoutHospitalsInput = {
    treatment_type_id?: IntFieldUpdateOperationsInput | number
    treatment_type_name?: StringFieldUpdateOperationsInput | string
    treatment_type_short_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opd_diagnosis_typesCreateManyOpdInput = {
    opd_diagnosis_type_id: number
    diagnosis_type_id: number
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receiptsCreateManyOpdInput = {
    receipt_id: number
    receipt_no?: string | null
    receipt_date: Date | string
    amount_paid: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    payment_mode_id: number
    reference_no?: string | null
    reference_date?: Date | string | null
    cancellation_datetime?: Date | string | null
    cancellation_by_user_id?: number | null
    cancellation_remarks?: string | null
  }

  export type opd_diagnosis_typesUpdateWithoutOpdInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis_types?: diagnosis_typesUpdateOneRequiredWithoutOpd_diagnosis_typesNestedInput
  }

  export type opd_diagnosis_typesUncheckedUpdateWithoutOpdInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opd_diagnosis_typesUncheckedUpdateManyWithoutOpdInput = {
    opd_diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    diagnosis_type_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receiptsUpdateWithoutOpdInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_tran?: receipt_tranUpdateManyWithoutReceiptsNestedInput
  }

  export type receiptsUncheckedUpdateWithoutOpdInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_tran?: receipt_tranUncheckedUpdateManyWithoutReceiptsNestedInput
  }

  export type receiptsUncheckedUpdateManyWithoutOpdInput = {
    receipt_id?: IntFieldUpdateOperationsInput | number
    receipt_no?: NullableStringFieldUpdateOperationsInput | string | null
    receipt_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_mode_id?: IntFieldUpdateOperationsInput | number
    reference_no?: NullableStringFieldUpdateOperationsInput | string | null
    reference_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_by_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    cancellation_remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type opdCreateManyPatientsInput = {
    opd_id: number
    opd_no?: string | null
    opd_datetime: Date | string
    is_follow_up_case: boolean
    treated_by_doctor_id: number
    registration_fee: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    old_opd_no?: string | null
  }

  export type opdUpdateWithoutPatientsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: doctorsUpdateOneRequiredWithoutOpdNestedInput
    opd_diagnosis_types?: opd_diagnosis_typesUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateWithoutPatientsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_diagnosis_types?: opd_diagnosis_typesUncheckedUpdateManyWithoutOpdNestedInput
    receipts?: receiptsUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type opdUncheckedUpdateManyWithoutPatientsInput = {
    opd_id?: IntFieldUpdateOperationsInput | number
    opd_no?: NullableStringFieldUpdateOperationsInput | string | null
    opd_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    is_follow_up_case?: BoolFieldUpdateOperationsInput | boolean
    treated_by_doctor_id?: IntFieldUpdateOperationsInput | number
    registration_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    old_opd_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receipt_tranCreateManyReceiptsInput = {
    receipt_tran_id: number
    sub_treatment_type_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranUpdateWithoutReceiptsInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_treatment_types?: sub_treatment_typesUpdateOneRequiredWithoutReceipt_tranNestedInput
  }

  export type receipt_tranUncheckedUpdateWithoutReceiptsInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receipt_tranUncheckedUpdateManyWithoutReceiptsInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receipt_tranCreateManySub_treatment_typesInput = {
    receipt_tran_id: number
    receipt_id: number
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
  }

  export type receipt_tranUpdateWithoutSub_treatment_typesInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: receiptsUpdateOneRequiredWithoutReceipt_tranNestedInput
  }

  export type receipt_tranUncheckedUpdateWithoutSub_treatment_typesInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    receipt_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receipt_tranUncheckedUpdateManyWithoutSub_treatment_typesInput = {
    receipt_tran_id?: IntFieldUpdateOperationsInput | number
    receipt_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_treatment_typesCreateManyTreatment_typesInput = {
    sub_treatment_type_id: number
    sub_treatment_type_name: string
    rate: Decimal | DecimalJsLike | number | string
    is_active: boolean
    description?: string | null
    user_id: number
    created: Date | string
    modified: Date | string
    account_id?: number | null
  }

  export type sub_treatment_typesUpdateWithoutTreatment_typesInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    receipt_tran?: receipt_tranUpdateManyWithoutSub_treatment_typesNestedInput
  }

  export type sub_treatment_typesUncheckedUpdateWithoutTreatment_typesInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
    receipt_tran?: receipt_tranUncheckedUpdateManyWithoutSub_treatment_typesNestedInput
  }

  export type sub_treatment_typesUncheckedUpdateManyWithoutTreatment_typesInput = {
    sub_treatment_type_id?: IntFieldUpdateOperationsInput | number
    sub_treatment_type_name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}