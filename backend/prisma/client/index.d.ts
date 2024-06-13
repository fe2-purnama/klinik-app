
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model auth
 * 
 */
export type auth = $Result.DefaultSelection<Prisma.$authPayload>
/**
 * Model doctor
 * 
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>
/**
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model reservation
 * 
 */
export type reservation = $Result.DefaultSelection<Prisma.$reservationPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const auth_role: {
  patient: 'patient',
  doctor: 'doctor',
  admin: 'admin'
};

export type auth_role = (typeof auth_role)[keyof typeof auth_role]


export const reservation_status: {
  Menunggu: 'Menunggu',
  Batal: 'Batal',
  Proses: 'Proses',
  Selesai: 'Selesai'
};

export type reservation_status = (typeof reservation_status)[keyof typeof reservation_status]

}

export type auth_role = $Enums.auth_role

export const auth_role: typeof $Enums.auth_role

export type reservation_status = $Enums.reservation_status

export const reservation_status: typeof $Enums.reservation_status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.auth`: Exposes CRUD operations for the **auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.authDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.doctorDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.reservationDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    admin: 'admin',
    auth: 'auth',
    doctor: 'doctor',
    patient: 'patient',
    reservation: 'reservation',
    review: 'review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'auth' | 'doctor' | 'patient' | 'reservation' | 'review'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      auth: {
        payload: Prisma.$authPayload<ExtArgs>
        fields: Prisma.authFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findFirst: {
            args: Prisma.authFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findMany: {
            args: Prisma.authFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          create: {
            args: Prisma.authCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          createMany: {
            args: Prisma.authCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.authDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          update: {
            args: Prisma.authUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          deleteMany: {
            args: Prisma.authDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.authUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.authUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.authGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.authCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>
        fields: Prisma.doctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>,
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      reservation: {
        payload: Prisma.$reservationPayload<ExtArgs>
        fields: Prisma.reservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          findFirst: {
            args: Prisma.reservationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          findMany: {
            args: Prisma.reservationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>[]
          }
          create: {
            args: Prisma.reservationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          createMany: {
            args: Prisma.reservationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reservationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          update: {
            args: Prisma.reservationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          deleteMany: {
            args: Prisma.reservationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reservationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reservationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.reservationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservationCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AuthCountOutputType
   */

  export type AuthCountOutputType = {
    doctor: number
  }

  export type AuthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | AuthCountOutputTypeCountDoctorArgs
  }

  // Custom InputTypes
  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCountOutputType
     */
    select?: AuthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    reservation: number
    review: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | DoctorCountOutputTypeCountReservationArgs
    review?: boolean | DoctorCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    reservation: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | PatientCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    review: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReservationCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    user_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    user_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    user_id: number | null
    name: string | null
  }

  export type AdminMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
  }

  export type AdminCountAggregateOutputType = {
    user_id: number
    name: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    user_id?: true
  }

  export type AdminSumAggregateInputType = {
    user_id?: true
  }

  export type AdminMinAggregateInputType = {
    user_id?: true
    name?: true
  }

  export type AdminMaxAggregateInputType = {
    user_id?: true
    name?: true
  }

  export type AdminCountAggregateInputType = {
    user_id?: true
    name?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    user_id: number
    name: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type adminSelectScalar = {
    user_id?: boolean
    name?: boolean
  }

  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const adminWithUser_idOnly = await prisma.admin.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly user_id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthAvgAggregateOutputType = {
    user_id: number | null
  }

  export type AuthSumAggregateOutputType = {
    user_id: number | null
  }

  export type AuthMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    role: $Enums.auth_role | null
  }

  export type AuthMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    role: $Enums.auth_role | null
  }

  export type AuthCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type AuthAvgAggregateInputType = {
    user_id?: true
  }

  export type AuthSumAggregateInputType = {
    user_id?: true
  }

  export type AuthMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    role?: true
  }

  export type AuthMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    role?: true
  }

  export type AuthCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth to aggregate.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type authGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authWhereInput
    orderBy?: authOrderByWithAggregationInput | authOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: authScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _avg?: AuthAvgAggregateInputType
    _sum?: AuthSumAggregateInputType
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    user_id: number
    email: string
    password: string
    role: $Enums.auth_role
    _count: AuthCountAggregateOutputType | null
    _avg: AuthAvgAggregateOutputType | null
    _sum: AuthSumAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends authGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type authSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    admin?: boolean | auth$adminArgs<ExtArgs>
    doctor?: boolean | auth$doctorArgs<ExtArgs>
    patient?: boolean | auth$patientArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>


  export type authSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type authInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | auth$adminArgs<ExtArgs>
    doctor?: boolean | auth$doctorArgs<ExtArgs>
    patient?: boolean | auth$patientArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $authPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs> | null
      doctor: Prisma.$doctorPayload<ExtArgs>[]
      patient: Prisma.$patientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      role: $Enums.auth_role
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type authGetPayload<S extends boolean | null | undefined | authDefaultArgs> = $Result.GetResult<Prisma.$authPayload, S>

  type authCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface authDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth'], meta: { name: 'auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {authFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authFindUniqueArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {authFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authFindFirstArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const authWithUser_idOnly = await prisma.auth.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends authFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Auth.
     * @param {authCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
    **/
    create<T extends authCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authCreateArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Auths.
     * @param {authCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends authCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth.
     * @param {authDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
    **/
    delete<T extends authDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authDeleteArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Auth.
     * @param {authUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authUpdateArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Auths.
     * @param {authDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth.
     * @param {authUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
    **/
    upsert<T extends authUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authUpsertArgs<ExtArgs>>
    ): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends authCountArgs>(
      args?: Subset<T, authCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authGroupByArgs} args - Group by arguments.
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
      T extends authGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authGroupByArgs['orderBy'] }
        : { orderBy?: authGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth model
   */
  readonly fields: authFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends auth$adminArgs<ExtArgs> = {}>(args?: Subset<T, auth$adminArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    doctor<T extends auth$doctorArgs<ExtArgs> = {}>(args?: Subset<T, auth$doctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'> | Null>;

    patient<T extends auth$patientArgs<ExtArgs> = {}>(args?: Subset<T, auth$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the auth model
   */ 
  interface authFieldRefs {
    readonly user_id: FieldRef<"auth", 'Int'>
    readonly email: FieldRef<"auth", 'String'>
    readonly password: FieldRef<"auth", 'String'>
    readonly role: FieldRef<"auth", 'auth_role'>
  }
    

  // Custom InputTypes
  /**
   * auth findUnique
   */
  export type authFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findUniqueOrThrow
   */
  export type authFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findFirst
   */
  export type authFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findFirstOrThrow
   */
  export type authFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findMany
   */
  export type authFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auths to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth create
   */
  export type authCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The data needed to create a auth.
     */
    data: XOR<authCreateInput, authUncheckedCreateInput>
  }

  /**
   * auth createMany
   */
  export type authCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auths.
     */
    data: authCreateManyInput | authCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth update
   */
  export type authUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The data needed to update a auth.
     */
    data: XOR<authUpdateInput, authUncheckedUpdateInput>
    /**
     * Choose, which auth to update.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth updateMany
   */
  export type authUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auths.
     */
    data: XOR<authUpdateManyMutationInput, authUncheckedUpdateManyInput>
    /**
     * Filter which auths to update
     */
    where?: authWhereInput
  }

  /**
   * auth upsert
   */
  export type authUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The filter to search for the auth to update in case it exists.
     */
    where: authWhereUniqueInput
    /**
     * In case the auth found by the `where` argument doesn't exist, create a new auth with this data.
     */
    create: XOR<authCreateInput, authUncheckedCreateInput>
    /**
     * In case the auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authUpdateInput, authUncheckedUpdateInput>
  }

  /**
   * auth delete
   */
  export type authDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter which auth to delete.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth deleteMany
   */
  export type authDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auths to delete
     */
    where?: authWhereInput
  }

  /**
   * auth.admin
   */
  export type auth$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
  }

  /**
   * auth.doctor
   */
  export type auth$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    cursor?: doctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * auth.patient
   */
  export type auth$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * auth without action
   */
  export type authDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
  }


  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    user_id: number | null
    experience: number | null
  }

  export type DoctorSumAggregateOutputType = {
    user_id: number | null
    experience: number | null
  }

  export type DoctorMinAggregateOutputType = {
    user_id: number | null
    doctor_id: string | null
    name: string | null
    gender: string | null
    specialization: string | null
    phone_number: string | null
    experience: number | null
    imgUrl: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    user_id: number | null
    doctor_id: string | null
    name: string | null
    gender: string | null
    specialization: string | null
    phone_number: string | null
    experience: number | null
    imgUrl: string | null
  }

  export type DoctorCountAggregateOutputType = {
    user_id: number
    doctor_id: number
    name: number
    gender: number
    specialization: number
    phone_number: number
    experience: number
    imgUrl: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    user_id?: true
    experience?: true
  }

  export type DoctorSumAggregateInputType = {
    user_id?: true
    experience?: true
  }

  export type DoctorMinAggregateInputType = {
    user_id?: true
    doctor_id?: true
    name?: true
    gender?: true
    specialization?: true
    phone_number?: true
    experience?: true
    imgUrl?: true
  }

  export type DoctorMaxAggregateInputType = {
    user_id?: true
    doctor_id?: true
    name?: true
    gender?: true
    specialization?: true
    phone_number?: true
    experience?: true
    imgUrl?: true
  }

  export type DoctorCountAggregateInputType = {
    user_id?: true
    doctor_id?: true
    name?: true
    gender?: true
    specialization?: true
    phone_number?: true
    experience?: true
    imgUrl?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput
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
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: doctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    user_id: number
    doctor_id: string
    name: string
    gender: string | null
    specialization: string | null
    phone_number: string | null
    experience: number
    imgUrl: string | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    doctor_id?: boolean
    name?: boolean
    gender?: boolean
    specialization?: boolean
    phone_number?: boolean
    experience?: boolean
    imgUrl?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
    reservation?: boolean | doctor$reservationArgs<ExtArgs>
    review?: boolean | doctor$reviewArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>


  export type doctorSelectScalar = {
    user_id?: boolean
    doctor_id?: boolean
    name?: boolean
    gender?: boolean
    specialization?: boolean
    phone_number?: boolean
    experience?: boolean
    imgUrl?: boolean
  }

  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
    reservation?: boolean | doctor$reservationArgs<ExtArgs>
    review?: boolean | doctor$reviewArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctor"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
      reservation: Prisma.$reservationPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      doctor_id: string
      name: string
      gender: string | null
      specialization: string | null
      phone_number: string | null
      experience: number
      imgUrl: string | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<Prisma.$doctorPayload, S>

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<doctorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor'], meta: { name: 'doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends doctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends doctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const doctorWithUser_idOnly = await prisma.doctor.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends doctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends doctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorCreateArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Doctors.
     * @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends doctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends doctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends doctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends doctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends doctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends doctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
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
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctor model
   */
  readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservation<T extends doctor$reservationArgs<ExtArgs> = {}>(args?: Subset<T, doctor$reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends doctor$reviewArgs<ExtArgs> = {}>(args?: Subset<T, doctor$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the doctor model
   */ 
  interface doctorFieldRefs {
    readonly user_id: FieldRef<"doctor", 'Int'>
    readonly doctor_id: FieldRef<"doctor", 'String'>
    readonly name: FieldRef<"doctor", 'String'>
    readonly gender: FieldRef<"doctor", 'String'>
    readonly specialization: FieldRef<"doctor", 'String'>
    readonly phone_number: FieldRef<"doctor", 'String'>
    readonly experience: FieldRef<"doctor", 'Int'>
    readonly imgUrl: FieldRef<"doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
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
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
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
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput
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
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>
  }

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
  }

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
  }

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput
  }

  /**
   * doctor.reservation
   */
  export type doctor$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    where?: reservationWhereInput
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    cursor?: reservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * doctor.review
   */
  export type doctor$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
  }


  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    user_id: number | null
  }

  export type PatientSumAggregateOutputType = {
    user_id: number | null
  }

  export type PatientMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    phone_number: string | null
  }

  export type PatientMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    phone_number: string | null
  }

  export type PatientCountAggregateOutputType = {
    user_id: number
    name: number
    phone_number: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    user_id?: true
  }

  export type PatientSumAggregateInputType = {
    user_id?: true
  }

  export type PatientMinAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
  }

  export type PatientMaxAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
  }

  export type PatientCountAggregateInputType = {
    user_id?: true
    name?: true
    phone_number?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
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
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    user_id: number
    name: string
    phone_number: string | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
    reservation?: boolean | patient$reservationArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>


  export type patientSelectScalar = {
    user_id?: boolean
    name?: boolean
    phone_number?: boolean
  }

  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
    reservation?: boolean | patient$reservationArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
      reservation: Prisma.$reservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      phone_number: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends patientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends patientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const patientWithUser_idOnly = await prisma.patient.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends patientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends patientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patientCreateArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends patientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends patientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patientDeleteArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends patientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends patientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends patientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends patientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpsertArgs<ExtArgs>>
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
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
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservation<T extends patient$reservationArgs<ExtArgs> = {}>(args?: Subset<T, patient$reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the patient model
   */ 
  interface patientFieldRefs {
    readonly user_id: FieldRef<"patient", 'Int'>
    readonly name: FieldRef<"patient", 'String'>
    readonly phone_number: FieldRef<"patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
  }

  /**
   * patient.reservation
   */
  export type patient$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    where?: reservationWhereInput
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    cursor?: reservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    patient_id: number | null
  }

  export type ReservationSumAggregateOutputType = {
    patient_id: number | null
  }

  export type ReservationMinAggregateOutputType = {
    reservation_id: string | null
    patient_id: number | null
    doctor_id: string | null
    doctor_name: string | null
    specialization: string | null
    patient_name: string | null
    nik: string | null
    ttl: string | null
    gender: string | null
    phone_number: string | null
    address: string | null
    reservation_date: Date | null
    complaint: string | null
    status: $Enums.reservation_status | null
  }

  export type ReservationMaxAggregateOutputType = {
    reservation_id: string | null
    patient_id: number | null
    doctor_id: string | null
    doctor_name: string | null
    specialization: string | null
    patient_name: string | null
    nik: string | null
    ttl: string | null
    gender: string | null
    phone_number: string | null
    address: string | null
    reservation_date: Date | null
    complaint: string | null
    status: $Enums.reservation_status | null
  }

  export type ReservationCountAggregateOutputType = {
    reservation_id: number
    patient_id: number
    doctor_id: number
    doctor_name: number
    specialization: number
    patient_name: number
    nik: number
    ttl: number
    gender: number
    phone_number: number
    address: number
    reservation_date: number
    complaint: number
    status: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    patient_id?: true
  }

  export type ReservationSumAggregateInputType = {
    patient_id?: true
  }

  export type ReservationMinAggregateInputType = {
    reservation_id?: true
    patient_id?: true
    doctor_id?: true
    doctor_name?: true
    specialization?: true
    patient_name?: true
    nik?: true
    ttl?: true
    gender?: true
    phone_number?: true
    address?: true
    reservation_date?: true
    complaint?: true
    status?: true
  }

  export type ReservationMaxAggregateInputType = {
    reservation_id?: true
    patient_id?: true
    doctor_id?: true
    doctor_name?: true
    specialization?: true
    patient_name?: true
    nik?: true
    ttl?: true
    gender?: true
    phone_number?: true
    address?: true
    reservation_date?: true
    complaint?: true
    status?: true
  }

  export type ReservationCountAggregateInputType = {
    reservation_id?: true
    patient_id?: true
    doctor_id?: true
    doctor_name?: true
    specialization?: true
    patient_name?: true
    nik?: true
    ttl?: true
    gender?: true
    phone_number?: true
    address?: true
    reservation_date?: true
    complaint?: true
    status?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservation to aggregate.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type reservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationWhereInput
    orderBy?: reservationOrderByWithAggregationInput | reservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: reservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    reservation_id: string
    patient_id: number
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date
    complaint: string | null
    status: $Enums.reservation_status
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends reservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type reservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservation_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    doctor_name?: boolean
    specialization?: boolean
    patient_name?: boolean
    nik?: boolean
    ttl?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    reservation_date?: boolean
    complaint?: boolean
    status?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
    review?: boolean | reservation$reviewArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>


  export type reservationSelectScalar = {
    reservation_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    doctor_name?: boolean
    specialization?: boolean
    patient_name?: boolean
    nik?: boolean
    ttl?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    reservation_date?: boolean
    complaint?: boolean
    status?: boolean
  }

  export type reservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
    review?: boolean | reservation$reviewArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $reservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservation"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
      doctor: Prisma.$doctorPayload<ExtArgs>
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reservation_id: string
      patient_id: number
      doctor_id: string
      doctor_name: string
      specialization: string
      patient_name: string
      nik: string
      ttl: string
      gender: string
      phone_number: string
      address: string
      reservation_date: Date
      complaint: string | null
      status: $Enums.reservation_status
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type reservationGetPayload<S extends boolean | null | undefined | reservationDefaultArgs> = $Result.GetResult<Prisma.$reservationPayload, S>

  type reservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface reservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservation'], meta: { name: 'reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {reservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reservationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reservationFindUniqueArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {reservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reservationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reservationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindFirstArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reservationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `reservation_id`
     * const reservationWithReservation_idOnly = await prisma.reservation.findMany({ select: { reservation_id: true } })
     * 
    **/
    findMany<T extends reservationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservation.
     * @param {reservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
    **/
    create<T extends reservationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reservationCreateArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {reservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends reservationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {reservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
    **/
    delete<T extends reservationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reservationDeleteArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {reservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reservationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpdateArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {reservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reservationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reservationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reservationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {reservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
    **/
    upsert<T extends reservationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reservationUpsertArgs<ExtArgs>>
    ): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends reservationCountArgs>(
      args?: Subset<T, reservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationGroupByArgs} args - Group by arguments.
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
      T extends reservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservationGroupByArgs['orderBy'] }
        : { orderBy?: reservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservation model
   */
  readonly fields: reservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorDefaultArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    review<T extends reservation$reviewArgs<ExtArgs> = {}>(args?: Subset<T, reservation$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reservation model
   */ 
  interface reservationFieldRefs {
    readonly reservation_id: FieldRef<"reservation", 'String'>
    readonly patient_id: FieldRef<"reservation", 'Int'>
    readonly doctor_id: FieldRef<"reservation", 'String'>
    readonly doctor_name: FieldRef<"reservation", 'String'>
    readonly specialization: FieldRef<"reservation", 'String'>
    readonly patient_name: FieldRef<"reservation", 'String'>
    readonly nik: FieldRef<"reservation", 'String'>
    readonly ttl: FieldRef<"reservation", 'String'>
    readonly gender: FieldRef<"reservation", 'String'>
    readonly phone_number: FieldRef<"reservation", 'String'>
    readonly address: FieldRef<"reservation", 'String'>
    readonly reservation_date: FieldRef<"reservation", 'DateTime'>
    readonly complaint: FieldRef<"reservation", 'String'>
    readonly status: FieldRef<"reservation", 'reservation_status'>
  }
    

  // Custom InputTypes
  /**
   * reservation findUnique
   */
  export type reservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation findUniqueOrThrow
   */
  export type reservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation findFirst
   */
  export type reservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation findFirstOrThrow
   */
  export type reservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservation to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation findMany
   */
  export type reservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationOrderByWithRelationInput | reservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservations.
     */
    cursor?: reservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * reservation create
   */
  export type reservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The data needed to create a reservation.
     */
    data: XOR<reservationCreateInput, reservationUncheckedCreateInput>
  }

  /**
   * reservation createMany
   */
  export type reservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservations.
     */
    data: reservationCreateManyInput | reservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservation update
   */
  export type reservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The data needed to update a reservation.
     */
    data: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>
    /**
     * Choose, which reservation to update.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation updateMany
   */
  export type reservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationWhereInput
  }

  /**
   * reservation upsert
   */
  export type reservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * The filter to search for the reservation to update in case it exists.
     */
    where: reservationWhereUniqueInput
    /**
     * In case the reservation found by the `where` argument doesn't exist, create a new reservation with this data.
     */
    create: XOR<reservationCreateInput, reservationUncheckedCreateInput>
    /**
     * In case the reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservationUpdateInput, reservationUncheckedUpdateInput>
  }

  /**
   * reservation delete
   */
  export type reservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
    /**
     * Filter which reservation to delete.
     */
    where: reservationWhereUniqueInput
  }

  /**
   * reservation deleteMany
   */
  export type reservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to delete
     */
    where?: reservationWhereInput
  }

  /**
   * reservation.review
   */
  export type reservation$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * reservation without action
   */
  export type reservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservation
     */
    select?: reservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservationInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    reservation_id: string | null
    doctor_id: string | null
    review: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    reservation_id: string | null
    doctor_id: string | null
    review: string | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    reservation_id: number
    doctor_id: number
    review: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    reservation_id?: true
    doctor_id?: true
    review?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    reservation_id?: true
    doctor_id?: true
    review?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    reservation_id?: true
    doctor_id?: true
    review?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    reservation_id: string
    doctor_id: string
    review: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    reservation_id?: boolean
    doctor_id?: boolean
    review?: boolean
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
    reservation?: boolean | reservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>


  export type reviewSelectScalar = {
    review_id?: boolean
    reservation_id?: boolean
    doctor_id?: boolean
    review?: boolean
  }

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
    reservation?: boolean | reservationDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>
      reservation: Prisma.$reservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      reservation_id: string
      doctor_id: string
      review: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
    **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorDefaultArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservation<T extends reservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reservationDefaultArgs<ExtArgs>>): Prisma__reservationClient<$Result.GetResult<Prisma.$reservationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the review model
   */ 
  interface reviewFieldRefs {
    readonly review_id: FieldRef<"review", 'Int'>
    readonly reservation_id: FieldRef<"review", 'String'>
    readonly doctor_id: FieldRef<"review", 'String'>
    readonly review: FieldRef<"review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AuthScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    user_id: 'user_id',
    doctor_id: 'doctor_id',
    name: 'name',
    gender: 'gender',
    specialization: 'specialization',
    phone_number: 'phone_number',
    experience: 'experience',
    imgUrl: 'imgUrl'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    phone_number: 'phone_number'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    reservation_id: 'reservation_id',
    patient_id: 'patient_id',
    doctor_id: 'doctor_id',
    doctor_name: 'doctor_name',
    specialization: 'specialization',
    patient_name: 'patient_name',
    nik: 'nik',
    ttl: 'ttl',
    gender: 'gender',
    phone_number: 'phone_number',
    address: 'address',
    reservation_date: 'reservation_date',
    complaint: 'complaint',
    status: 'status'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    reservation_id: 'reservation_id',
    doctor_id: 'doctor_id',
    review: 'review'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'auth_role'
   */
  export type Enumauth_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auth_role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'reservation_status'
   */
  export type Enumreservation_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservation_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    user_id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    auth?: XOR<AuthRelationFilter, authWhereInput>
  }

  export type adminOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    auth?: authOrderByWithRelationInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    auth?: XOR<AuthRelationFilter, authWhereInput>
  }, "user_id">

  export type adminOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
  }

  export type authWhereInput = {
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    user_id?: IntFilter<"auth"> | number
    email?: StringFilter<"auth"> | string
    password?: StringFilter<"auth"> | string
    role?: Enumauth_roleFilter<"auth"> | $Enums.auth_role
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
    doctor?: DoctorListRelationFilter
    patient?: XOR<PatientNullableRelationFilter, patientWhereInput> | null
  }

  export type authOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    admin?: adminOrderByWithRelationInput
    doctor?: doctorOrderByRelationAggregateInput
    patient?: patientOrderByWithRelationInput
  }

  export type authWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    password?: StringFilter<"auth"> | string
    role?: Enumauth_roleFilter<"auth"> | $Enums.auth_role
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
    doctor?: DoctorListRelationFilter
    patient?: XOR<PatientNullableRelationFilter, patientWhereInput> | null
  }, "user_id" | "email">

  export type authOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: authCountOrderByAggregateInput
    _avg?: authAvgOrderByAggregateInput
    _max?: authMaxOrderByAggregateInput
    _min?: authMinOrderByAggregateInput
    _sum?: authSumOrderByAggregateInput
  }

  export type authScalarWhereWithAggregatesInput = {
    AND?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    OR?: authScalarWhereWithAggregatesInput[]
    NOT?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"auth"> | number
    email?: StringWithAggregatesFilter<"auth"> | string
    password?: StringWithAggregatesFilter<"auth"> | string
    role?: Enumauth_roleWithAggregatesFilter<"auth"> | $Enums.auth_role
  }

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    user_id?: IntFilter<"doctor"> | number
    doctor_id?: StringFilter<"doctor"> | string
    name?: StringFilter<"doctor"> | string
    gender?: StringNullableFilter<"doctor"> | string | null
    specialization?: StringNullableFilter<"doctor"> | string | null
    phone_number?: StringNullableFilter<"doctor"> | string | null
    experience?: IntFilter<"doctor"> | number
    imgUrl?: StringNullableFilter<"doctor"> | string | null
    auth?: XOR<AuthRelationFilter, authWhereInput>
    reservation?: ReservationListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type doctorOrderByWithRelationInput = {
    user_id?: SortOrder
    doctor_id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    experience?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    auth?: authOrderByWithRelationInput
    reservation?: reservationOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type doctorWhereUniqueInput = Prisma.AtLeast<{
    doctor_id?: string
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    user_id?: IntFilter<"doctor"> | number
    name?: StringFilter<"doctor"> | string
    gender?: StringNullableFilter<"doctor"> | string | null
    specialization?: StringNullableFilter<"doctor"> | string | null
    phone_number?: StringNullableFilter<"doctor"> | string | null
    experience?: IntFilter<"doctor"> | number
    imgUrl?: StringNullableFilter<"doctor"> | string | null
    auth?: XOR<AuthRelationFilter, authWhereInput>
    reservation?: ReservationListRelationFilter
    review?: ReviewListRelationFilter
  }, "doctor_id" | "doctor_id">

  export type doctorOrderByWithAggregationInput = {
    user_id?: SortOrder
    doctor_id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    experience?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    _count?: doctorCountOrderByAggregateInput
    _avg?: doctorAvgOrderByAggregateInput
    _max?: doctorMaxOrderByAggregateInput
    _min?: doctorMinOrderByAggregateInput
    _sum?: doctorSumOrderByAggregateInput
  }

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    OR?: doctorScalarWhereWithAggregatesInput[]
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"doctor"> | number
    doctor_id?: StringWithAggregatesFilter<"doctor"> | string
    name?: StringWithAggregatesFilter<"doctor"> | string
    gender?: StringNullableWithAggregatesFilter<"doctor"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"doctor"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"doctor"> | string | null
    experience?: IntWithAggregatesFilter<"doctor"> | number
    imgUrl?: StringNullableWithAggregatesFilter<"doctor"> | string | null
  }

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    user_id?: IntFilter<"patient"> | number
    name?: StringFilter<"patient"> | string
    phone_number?: StringNullableFilter<"patient"> | string | null
    auth?: XOR<AuthRelationFilter, authWhereInput>
    reservation?: ReservationListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    auth?: authOrderByWithRelationInput
    reservation?: reservationOrderByRelationAggregateInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    name?: StringFilter<"patient"> | string
    phone_number?: StringNullableFilter<"patient"> | string | null
    auth?: XOR<AuthRelationFilter, authWhereInput>
    reservation?: ReservationListRelationFilter
  }, "user_id">

  export type patientOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"patient"> | number
    name?: StringWithAggregatesFilter<"patient"> | string
    phone_number?: StringNullableWithAggregatesFilter<"patient"> | string | null
  }

  export type reservationWhereInput = {
    AND?: reservationWhereInput | reservationWhereInput[]
    OR?: reservationWhereInput[]
    NOT?: reservationWhereInput | reservationWhereInput[]
    reservation_id?: StringFilter<"reservation"> | string
    patient_id?: IntFilter<"reservation"> | number
    doctor_id?: StringFilter<"reservation"> | string
    doctor_name?: StringFilter<"reservation"> | string
    specialization?: StringFilter<"reservation"> | string
    patient_name?: StringFilter<"reservation"> | string
    nik?: StringFilter<"reservation"> | string
    ttl?: StringFilter<"reservation"> | string
    gender?: StringFilter<"reservation"> | string
    phone_number?: StringFilter<"reservation"> | string
    address?: StringFilter<"reservation"> | string
    reservation_date?: DateTimeFilter<"reservation"> | Date | string
    complaint?: StringNullableFilter<"reservation"> | string | null
    status?: Enumreservation_statusFilter<"reservation"> | $Enums.reservation_status
    patient?: XOR<PatientRelationFilter, patientWhereInput>
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>
    review?: ReviewListRelationFilter
  }

  export type reservationOrderByWithRelationInput = {
    reservation_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    specialization?: SortOrder
    patient_name?: SortOrder
    nik?: SortOrder
    ttl?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    reservation_date?: SortOrder
    complaint?: SortOrderInput | SortOrder
    status?: SortOrder
    patient?: patientOrderByWithRelationInput
    doctor?: doctorOrderByWithRelationInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type reservationWhereUniqueInput = Prisma.AtLeast<{
    reservation_id?: string
    AND?: reservationWhereInput | reservationWhereInput[]
    OR?: reservationWhereInput[]
    NOT?: reservationWhereInput | reservationWhereInput[]
    patient_id?: IntFilter<"reservation"> | number
    doctor_id?: StringFilter<"reservation"> | string
    doctor_name?: StringFilter<"reservation"> | string
    specialization?: StringFilter<"reservation"> | string
    patient_name?: StringFilter<"reservation"> | string
    nik?: StringFilter<"reservation"> | string
    ttl?: StringFilter<"reservation"> | string
    gender?: StringFilter<"reservation"> | string
    phone_number?: StringFilter<"reservation"> | string
    address?: StringFilter<"reservation"> | string
    reservation_date?: DateTimeFilter<"reservation"> | Date | string
    complaint?: StringNullableFilter<"reservation"> | string | null
    status?: Enumreservation_statusFilter<"reservation"> | $Enums.reservation_status
    patient?: XOR<PatientRelationFilter, patientWhereInput>
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>
    review?: ReviewListRelationFilter
  }, "reservation_id">

  export type reservationOrderByWithAggregationInput = {
    reservation_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    specialization?: SortOrder
    patient_name?: SortOrder
    nik?: SortOrder
    ttl?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    reservation_date?: SortOrder
    complaint?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: reservationCountOrderByAggregateInput
    _avg?: reservationAvgOrderByAggregateInput
    _max?: reservationMaxOrderByAggregateInput
    _min?: reservationMinOrderByAggregateInput
    _sum?: reservationSumOrderByAggregateInput
  }

  export type reservationScalarWhereWithAggregatesInput = {
    AND?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[]
    OR?: reservationScalarWhereWithAggregatesInput[]
    NOT?: reservationScalarWhereWithAggregatesInput | reservationScalarWhereWithAggregatesInput[]
    reservation_id?: StringWithAggregatesFilter<"reservation"> | string
    patient_id?: IntWithAggregatesFilter<"reservation"> | number
    doctor_id?: StringWithAggregatesFilter<"reservation"> | string
    doctor_name?: StringWithAggregatesFilter<"reservation"> | string
    specialization?: StringWithAggregatesFilter<"reservation"> | string
    patient_name?: StringWithAggregatesFilter<"reservation"> | string
    nik?: StringWithAggregatesFilter<"reservation"> | string
    ttl?: StringWithAggregatesFilter<"reservation"> | string
    gender?: StringWithAggregatesFilter<"reservation"> | string
    phone_number?: StringWithAggregatesFilter<"reservation"> | string
    address?: StringWithAggregatesFilter<"reservation"> | string
    reservation_date?: DateTimeWithAggregatesFilter<"reservation"> | Date | string
    complaint?: StringNullableWithAggregatesFilter<"reservation"> | string | null
    status?: Enumreservation_statusWithAggregatesFilter<"reservation"> | $Enums.reservation_status
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    review_id?: IntFilter<"review"> | number
    reservation_id?: StringFilter<"review"> | string
    doctor_id?: StringFilter<"review"> | string
    review?: StringNullableFilter<"review"> | string | null
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>
    reservation?: XOR<ReservationRelationFilter, reservationWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    review_id?: SortOrder
    reservation_id?: SortOrder
    doctor_id?: SortOrder
    review?: SortOrderInput | SortOrder
    doctor?: doctorOrderByWithRelationInput
    reservation?: reservationOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    reservation_id?: StringFilter<"review"> | string
    doctor_id?: StringFilter<"review"> | string
    review?: StringNullableFilter<"review"> | string | null
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>
    reservation?: XOR<ReservationRelationFilter, reservationWhereInput>
  }, "review_id">

  export type reviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    reservation_id?: SortOrder
    doctor_id?: SortOrder
    review?: SortOrderInput | SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"review"> | number
    reservation_id?: StringWithAggregatesFilter<"review"> | string
    doctor_id?: StringWithAggregatesFilter<"review"> | string
    review?: StringNullableWithAggregatesFilter<"review"> | string | null
  }

  export type adminCreateInput = {
    name: string
    auth: authCreateNestedOneWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    user_id: number
    name: string
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth?: authUpdateOneRequiredWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateManyInput = {
    user_id: number
    name: string
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type authCreateInput = {
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminCreateNestedOneWithoutAuthInput
    doctor?: doctorCreateNestedManyWithoutAuthInput
    patient?: patientCreateNestedOneWithoutAuthInput
  }

  export type authUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminUncheckedCreateNestedOneWithoutAuthInput
    doctor?: doctorUncheckedCreateNestedManyWithoutAuthInput
    patient?: patientUncheckedCreateNestedOneWithoutAuthInput
  }

  export type authUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUpdateOneWithoutAuthNestedInput
    doctor?: doctorUpdateManyWithoutAuthNestedInput
    patient?: patientUpdateOneWithoutAuthNestedInput
  }

  export type authUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUncheckedUpdateOneWithoutAuthNestedInput
    doctor?: doctorUncheckedUpdateManyWithoutAuthNestedInput
    patient?: patientUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type authCreateManyInput = {
    user_id?: number
    email: string
    password: string
    role: $Enums.auth_role
  }

  export type authUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
  }

  export type authUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
  }

  export type doctorCreateInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    auth: authCreateNestedOneWithoutDoctorInput
    reservation?: reservationCreateNestedManyWithoutDoctorInput
    review?: reviewCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateInput = {
    user_id: number
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    reservation?: reservationUncheckedCreateNestedManyWithoutDoctorInput
    review?: reviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: authUpdateOneRequiredWithoutDoctorNestedInput
    reservation?: reservationUpdateManyWithoutDoctorNestedInput
    review?: reviewUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUncheckedUpdateManyWithoutDoctorNestedInput
    review?: reviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorCreateManyInput = {
    user_id: number
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
  }

  export type doctorUpdateManyMutationInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doctorUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patientCreateInput = {
    name: string
    phone_number?: string | null
    auth?: authCreateNestedOneWithoutPatientInput
    reservation?: reservationCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    user_id?: number
    name: string
    phone_number?: string | null
    reservation?: reservationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: authUpdateOneRequiredWithoutPatientNestedInput
    reservation?: reservationUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    user_id?: number
    name: string
    phone_number?: string | null
  }

  export type patientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patientUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationCreateInput = {
    reservation_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    patient: patientCreateNestedOneWithoutReservationInput
    doctor: doctorCreateNestedOneWithoutReservationInput
    review?: reviewCreateNestedManyWithoutReservationInput
  }

  export type reservationUncheckedCreateInput = {
    reservation_id: string
    patient_id: number
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    review?: reviewUncheckedCreateNestedManyWithoutReservationInput
  }

  export type reservationUpdateInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    patient?: patientUpdateOneRequiredWithoutReservationNestedInput
    doctor?: doctorUpdateOneRequiredWithoutReservationNestedInput
    review?: reviewUpdateManyWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    review?: reviewUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type reservationCreateManyInput = {
    reservation_id: string
    patient_id: number
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
  }

  export type reservationUpdateManyMutationInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
  }

  export type reservationUncheckedUpdateManyInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
  }

  export type reviewCreateInput = {
    review?: string | null
    doctor: doctorCreateNestedOneWithoutReviewInput
    reservation: reservationCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    review_id?: number
    reservation_id: string
    doctor_id: string
    review?: string | null
  }

  export type reviewUpdateInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: doctorUpdateOneRequiredWithoutReviewNestedInput
    reservation?: reservationUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateManyInput = {
    review_id?: number
    reservation_id: string
    doctor_id: string
    review?: string | null
  }

  export type reviewUpdateManyMutationInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthRelationFilter = {
    is?: authWhereInput
    isNot?: authWhereInput
  }

  export type adminCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type Enumauth_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_role | Enumauth_roleFieldRefInput<$PrismaModel>
    in?: $Enums.auth_role[]
    notIn?: $Enums.auth_role[]
    not?: NestedEnumauth_roleFilter<$PrismaModel> | $Enums.auth_role
  }

  export type AdminNullableRelationFilter = {
    is?: adminWhereInput | null
    isNot?: adminWhereInput | null
  }

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput
    some?: doctorWhereInput
    none?: doctorWhereInput
  }

  export type PatientNullableRelationFilter = {
    is?: patientWhereInput | null
    isNot?: patientWhereInput | null
  }

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type authAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type authMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type authMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type authSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumauth_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_role | Enumauth_roleFieldRefInput<$PrismaModel>
    in?: $Enums.auth_role[]
    notIn?: $Enums.auth_role[]
    not?: NestedEnumauth_roleWithAggregatesFilter<$PrismaModel> | $Enums.auth_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumauth_roleFilter<$PrismaModel>
    _max?: NestedEnumauth_roleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReservationListRelationFilter = {
    every?: reservationWhereInput
    some?: reservationWhereInput
    none?: reservationWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorCountOrderByAggregateInput = {
    user_id?: SortOrder
    doctor_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    specialization?: SortOrder
    phone_number?: SortOrder
    experience?: SortOrder
    imgUrl?: SortOrder
  }

  export type doctorAvgOrderByAggregateInput = {
    user_id?: SortOrder
    experience?: SortOrder
  }

  export type doctorMaxOrderByAggregateInput = {
    user_id?: SortOrder
    doctor_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    specialization?: SortOrder
    phone_number?: SortOrder
    experience?: SortOrder
    imgUrl?: SortOrder
  }

  export type doctorMinOrderByAggregateInput = {
    user_id?: SortOrder
    doctor_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    specialization?: SortOrder
    phone_number?: SortOrder
    experience?: SortOrder
    imgUrl?: SortOrder
  }

  export type doctorSumOrderByAggregateInput = {
    user_id?: SortOrder
    experience?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type patientCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumreservation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.reservation_status | Enumreservation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.reservation_status[]
    notIn?: $Enums.reservation_status[]
    not?: NestedEnumreservation_statusFilter<$PrismaModel> | $Enums.reservation_status
  }

  export type PatientRelationFilter = {
    is?: patientWhereInput
    isNot?: patientWhereInput
  }

  export type DoctorRelationFilter = {
    is?: doctorWhereInput
    isNot?: doctorWhereInput
  }

  export type reservationCountOrderByAggregateInput = {
    reservation_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    specialization?: SortOrder
    patient_name?: SortOrder
    nik?: SortOrder
    ttl?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    reservation_date?: SortOrder
    complaint?: SortOrder
    status?: SortOrder
  }

  export type reservationAvgOrderByAggregateInput = {
    patient_id?: SortOrder
  }

  export type reservationMaxOrderByAggregateInput = {
    reservation_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    specialization?: SortOrder
    patient_name?: SortOrder
    nik?: SortOrder
    ttl?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    reservation_date?: SortOrder
    complaint?: SortOrder
    status?: SortOrder
  }

  export type reservationMinOrderByAggregateInput = {
    reservation_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    doctor_name?: SortOrder
    specialization?: SortOrder
    patient_name?: SortOrder
    nik?: SortOrder
    ttl?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    reservation_date?: SortOrder
    complaint?: SortOrder
    status?: SortOrder
  }

  export type reservationSumOrderByAggregateInput = {
    patient_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumreservation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservation_status | Enumreservation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.reservation_status[]
    notIn?: $Enums.reservation_status[]
    not?: NestedEnumreservation_statusWithAggregatesFilter<$PrismaModel> | $Enums.reservation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservation_statusFilter<$PrismaModel>
    _max?: NestedEnumreservation_statusFilter<$PrismaModel>
  }

  export type ReservationRelationFilter = {
    is?: reservationWhereInput
    isNot?: reservationWhereInput
  }

  export type reviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    reservation_id?: SortOrder
    doctor_id?: SortOrder
    review?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    reservation_id?: SortOrder
    doctor_id?: SortOrder
    review?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    reservation_id?: SortOrder
    doctor_id?: SortOrder
    review?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    review_id?: SortOrder
  }

  export type authCreateNestedOneWithoutAdminInput = {
    create?: XOR<authCreateWithoutAdminInput, authUncheckedCreateWithoutAdminInput>
    connectOrCreate?: authCreateOrConnectWithoutAdminInput
    connect?: authWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type authUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<authCreateWithoutAdminInput, authUncheckedCreateWithoutAdminInput>
    connectOrCreate?: authCreateOrConnectWithoutAdminInput
    upsert?: authUpsertWithoutAdminInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutAdminInput, authUpdateWithoutAdminInput>, authUncheckedUpdateWithoutAdminInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adminCreateNestedOneWithoutAuthInput = {
    create?: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
    connectOrCreate?: adminCreateOrConnectWithoutAuthInput
    connect?: adminWhereUniqueInput
  }

  export type doctorCreateNestedManyWithoutAuthInput = {
    create?: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput> | doctorCreateWithoutAuthInput[] | doctorUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutAuthInput | doctorCreateOrConnectWithoutAuthInput[]
    createMany?: doctorCreateManyAuthInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type patientCreateNestedOneWithoutAuthInput = {
    create?: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
    connectOrCreate?: patientCreateOrConnectWithoutAuthInput
    connect?: patientWhereUniqueInput
  }

  export type adminUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
    connectOrCreate?: adminCreateOrConnectWithoutAuthInput
    connect?: adminWhereUniqueInput
  }

  export type doctorUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput> | doctorCreateWithoutAuthInput[] | doctorUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutAuthInput | doctorCreateOrConnectWithoutAuthInput[]
    createMany?: doctorCreateManyAuthInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type patientUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
    connectOrCreate?: patientCreateOrConnectWithoutAuthInput
    connect?: patientWhereUniqueInput
  }

  export type Enumauth_roleFieldUpdateOperationsInput = {
    set?: $Enums.auth_role
  }

  export type adminUpdateOneWithoutAuthNestedInput = {
    create?: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
    connectOrCreate?: adminCreateOrConnectWithoutAuthInput
    upsert?: adminUpsertWithoutAuthInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutAuthInput, adminUpdateWithoutAuthInput>, adminUncheckedUpdateWithoutAuthInput>
  }

  export type doctorUpdateManyWithoutAuthNestedInput = {
    create?: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput> | doctorCreateWithoutAuthInput[] | doctorUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutAuthInput | doctorCreateOrConnectWithoutAuthInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutAuthInput | doctorUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: doctorCreateManyAuthInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutAuthInput | doctorUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutAuthInput | doctorUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type patientUpdateOneWithoutAuthNestedInput = {
    create?: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
    connectOrCreate?: patientCreateOrConnectWithoutAuthInput
    upsert?: patientUpsertWithoutAuthInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutAuthInput, patientUpdateWithoutAuthInput>, patientUncheckedUpdateWithoutAuthInput>
  }

  export type adminUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
    connectOrCreate?: adminCreateOrConnectWithoutAuthInput
    upsert?: adminUpsertWithoutAuthInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutAuthInput, adminUpdateWithoutAuthInput>, adminUncheckedUpdateWithoutAuthInput>
  }

  export type doctorUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput> | doctorCreateWithoutAuthInput[] | doctorUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutAuthInput | doctorCreateOrConnectWithoutAuthInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutAuthInput | doctorUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: doctorCreateManyAuthInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutAuthInput | doctorUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutAuthInput | doctorUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type patientUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
    connectOrCreate?: patientCreateOrConnectWithoutAuthInput
    upsert?: patientUpsertWithoutAuthInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutAuthInput, patientUpdateWithoutAuthInput>, patientUncheckedUpdateWithoutAuthInput>
  }

  export type authCreateNestedOneWithoutDoctorInput = {
    create?: XOR<authCreateWithoutDoctorInput, authUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: authCreateOrConnectWithoutDoctorInput
    connect?: authWhereUniqueInput
  }

  export type reservationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput> | reservationCreateWithoutDoctorInput[] | reservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutDoctorInput | reservationCreateOrConnectWithoutDoctorInput[]
    createMany?: reservationCreateManyDoctorInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutDoctorInput = {
    create?: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput> | reviewCreateWithoutDoctorInput[] | reviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutDoctorInput | reviewCreateOrConnectWithoutDoctorInput[]
    createMany?: reviewCreateManyDoctorInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type reservationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput> | reservationCreateWithoutDoctorInput[] | reservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutDoctorInput | reservationCreateOrConnectWithoutDoctorInput[]
    createMany?: reservationCreateManyDoctorInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput> | reviewCreateWithoutDoctorInput[] | reviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutDoctorInput | reviewCreateOrConnectWithoutDoctorInput[]
    createMany?: reviewCreateManyDoctorInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type authUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<authCreateWithoutDoctorInput, authUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: authCreateOrConnectWithoutDoctorInput
    upsert?: authUpsertWithoutDoctorInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutDoctorInput, authUpdateWithoutDoctorInput>, authUncheckedUpdateWithoutDoctorInput>
  }

  export type reservationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput> | reservationCreateWithoutDoctorInput[] | reservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutDoctorInput | reservationCreateOrConnectWithoutDoctorInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutDoctorInput | reservationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: reservationCreateManyDoctorInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutDoctorInput | reservationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutDoctorInput | reservationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput> | reviewCreateWithoutDoctorInput[] | reviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutDoctorInput | reviewCreateOrConnectWithoutDoctorInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutDoctorInput | reviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: reviewCreateManyDoctorInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutDoctorInput | reviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutDoctorInput | reviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reservationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput> | reservationCreateWithoutDoctorInput[] | reservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutDoctorInput | reservationCreateOrConnectWithoutDoctorInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutDoctorInput | reservationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: reservationCreateManyDoctorInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutDoctorInput | reservationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutDoctorInput | reservationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput> | reviewCreateWithoutDoctorInput[] | reviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutDoctorInput | reviewCreateOrConnectWithoutDoctorInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutDoctorInput | reviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: reviewCreateManyDoctorInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutDoctorInput | reviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutDoctorInput | reviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type authCreateNestedOneWithoutPatientInput = {
    create?: XOR<authCreateWithoutPatientInput, authUncheckedCreateWithoutPatientInput>
    connectOrCreate?: authCreateOrConnectWithoutPatientInput
    connect?: authWhereUniqueInput
  }

  export type reservationCreateNestedManyWithoutPatientInput = {
    create?: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput> | reservationCreateWithoutPatientInput[] | reservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutPatientInput | reservationCreateOrConnectWithoutPatientInput[]
    createMany?: reservationCreateManyPatientInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type reservationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput> | reservationCreateWithoutPatientInput[] | reservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutPatientInput | reservationCreateOrConnectWithoutPatientInput[]
    createMany?: reservationCreateManyPatientInputEnvelope
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
  }

  export type authUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<authCreateWithoutPatientInput, authUncheckedCreateWithoutPatientInput>
    connectOrCreate?: authCreateOrConnectWithoutPatientInput
    upsert?: authUpsertWithoutPatientInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutPatientInput, authUpdateWithoutPatientInput>, authUncheckedUpdateWithoutPatientInput>
  }

  export type reservationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput> | reservationCreateWithoutPatientInput[] | reservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutPatientInput | reservationCreateOrConnectWithoutPatientInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutPatientInput | reservationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: reservationCreateManyPatientInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutPatientInput | reservationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutPatientInput | reservationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type reservationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput> | reservationCreateWithoutPatientInput[] | reservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: reservationCreateOrConnectWithoutPatientInput | reservationCreateOrConnectWithoutPatientInput[]
    upsert?: reservationUpsertWithWhereUniqueWithoutPatientInput | reservationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: reservationCreateManyPatientInputEnvelope
    set?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    disconnect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    delete?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    connect?: reservationWhereUniqueInput | reservationWhereUniqueInput[]
    update?: reservationUpdateWithWhereUniqueWithoutPatientInput | reservationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: reservationUpdateManyWithWhereWithoutPatientInput | reservationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: reservationScalarWhereInput | reservationScalarWhereInput[]
  }

  export type patientCreateNestedOneWithoutReservationInput = {
    create?: XOR<patientCreateWithoutReservationInput, patientUncheckedCreateWithoutReservationInput>
    connectOrCreate?: patientCreateOrConnectWithoutReservationInput
    connect?: patientWhereUniqueInput
  }

  export type doctorCreateNestedOneWithoutReservationInput = {
    create?: XOR<doctorCreateWithoutReservationInput, doctorUncheckedCreateWithoutReservationInput>
    connectOrCreate?: doctorCreateOrConnectWithoutReservationInput
    connect?: doctorWhereUniqueInput
  }

  export type reviewCreateNestedManyWithoutReservationInput = {
    create?: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput> | reviewCreateWithoutReservationInput[] | reviewUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutReservationInput | reviewCreateOrConnectWithoutReservationInput[]
    createMany?: reviewCreateManyReservationInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput> | reviewCreateWithoutReservationInput[] | reviewUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutReservationInput | reviewCreateOrConnectWithoutReservationInput[]
    createMany?: reviewCreateManyReservationInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumreservation_statusFieldUpdateOperationsInput = {
    set?: $Enums.reservation_status
  }

  export type patientUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<patientCreateWithoutReservationInput, patientUncheckedCreateWithoutReservationInput>
    connectOrCreate?: patientCreateOrConnectWithoutReservationInput
    upsert?: patientUpsertWithoutReservationInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutReservationInput, patientUpdateWithoutReservationInput>, patientUncheckedUpdateWithoutReservationInput>
  }

  export type doctorUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<doctorCreateWithoutReservationInput, doctorUncheckedCreateWithoutReservationInput>
    connectOrCreate?: doctorCreateOrConnectWithoutReservationInput
    upsert?: doctorUpsertWithoutReservationInput
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutReservationInput, doctorUpdateWithoutReservationInput>, doctorUncheckedUpdateWithoutReservationInput>
  }

  export type reviewUpdateManyWithoutReservationNestedInput = {
    create?: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput> | reviewCreateWithoutReservationInput[] | reviewUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutReservationInput | reviewCreateOrConnectWithoutReservationInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutReservationInput | reviewUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: reviewCreateManyReservationInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutReservationInput | reviewUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutReservationInput | reviewUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput> | reviewCreateWithoutReservationInput[] | reviewUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutReservationInput | reviewCreateOrConnectWithoutReservationInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutReservationInput | reviewUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: reviewCreateManyReservationInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutReservationInput | reviewUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutReservationInput | reviewUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type doctorCreateNestedOneWithoutReviewInput = {
    create?: XOR<doctorCreateWithoutReviewInput, doctorUncheckedCreateWithoutReviewInput>
    connectOrCreate?: doctorCreateOrConnectWithoutReviewInput
    connect?: doctorWhereUniqueInput
  }

  export type reservationCreateNestedOneWithoutReviewInput = {
    create?: XOR<reservationCreateWithoutReviewInput, reservationUncheckedCreateWithoutReviewInput>
    connectOrCreate?: reservationCreateOrConnectWithoutReviewInput
    connect?: reservationWhereUniqueInput
  }

  export type doctorUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<doctorCreateWithoutReviewInput, doctorUncheckedCreateWithoutReviewInput>
    connectOrCreate?: doctorCreateOrConnectWithoutReviewInput
    upsert?: doctorUpsertWithoutReviewInput
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutReviewInput, doctorUpdateWithoutReviewInput>, doctorUncheckedUpdateWithoutReviewInput>
  }

  export type reservationUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<reservationCreateWithoutReviewInput, reservationUncheckedCreateWithoutReviewInput>
    connectOrCreate?: reservationCreateOrConnectWithoutReviewInput
    upsert?: reservationUpsertWithoutReviewInput
    connect?: reservationWhereUniqueInput
    update?: XOR<XOR<reservationUpdateToOneWithWhereWithoutReviewInput, reservationUpdateWithoutReviewInput>, reservationUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumauth_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_role | Enumauth_roleFieldRefInput<$PrismaModel>
    in?: $Enums.auth_role[]
    notIn?: $Enums.auth_role[]
    not?: NestedEnumauth_roleFilter<$PrismaModel> | $Enums.auth_role
  }

  export type NestedEnumauth_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_role | Enumauth_roleFieldRefInput<$PrismaModel>
    in?: $Enums.auth_role[]
    notIn?: $Enums.auth_role[]
    not?: NestedEnumauth_roleWithAggregatesFilter<$PrismaModel> | $Enums.auth_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumauth_roleFilter<$PrismaModel>
    _max?: NestedEnumauth_roleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumreservation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.reservation_status | Enumreservation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.reservation_status[]
    notIn?: $Enums.reservation_status[]
    not?: NestedEnumreservation_statusFilter<$PrismaModel> | $Enums.reservation_status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumreservation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservation_status | Enumreservation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.reservation_status[]
    notIn?: $Enums.reservation_status[]
    not?: NestedEnumreservation_statusWithAggregatesFilter<$PrismaModel> | $Enums.reservation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservation_statusFilter<$PrismaModel>
    _max?: NestedEnumreservation_statusFilter<$PrismaModel>
  }

  export type authCreateWithoutAdminInput = {
    email: string
    password: string
    role: $Enums.auth_role
    doctor?: doctorCreateNestedManyWithoutAuthInput
    patient?: patientCreateNestedOneWithoutAuthInput
  }

  export type authUncheckedCreateWithoutAdminInput = {
    user_id?: number
    email: string
    password: string
    role: $Enums.auth_role
    doctor?: doctorUncheckedCreateNestedManyWithoutAuthInput
    patient?: patientUncheckedCreateNestedOneWithoutAuthInput
  }

  export type authCreateOrConnectWithoutAdminInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutAdminInput, authUncheckedCreateWithoutAdminInput>
  }

  export type authUpsertWithoutAdminInput = {
    update: XOR<authUpdateWithoutAdminInput, authUncheckedUpdateWithoutAdminInput>
    create: XOR<authCreateWithoutAdminInput, authUncheckedCreateWithoutAdminInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutAdminInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutAdminInput, authUncheckedUpdateWithoutAdminInput>
  }

  export type authUpdateWithoutAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    doctor?: doctorUpdateManyWithoutAuthNestedInput
    patient?: patientUpdateOneWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutAdminInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    doctor?: doctorUncheckedUpdateManyWithoutAuthNestedInput
    patient?: patientUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type adminCreateWithoutAuthInput = {
    name: string
  }

  export type adminUncheckedCreateWithoutAuthInput = {
    name: string
  }

  export type adminCreateOrConnectWithoutAuthInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
  }

  export type doctorCreateWithoutAuthInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    reservation?: reservationCreateNestedManyWithoutDoctorInput
    review?: reviewCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutAuthInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    reservation?: reservationUncheckedCreateNestedManyWithoutDoctorInput
    review?: reviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutAuthInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput>
  }

  export type doctorCreateManyAuthInputEnvelope = {
    data: doctorCreateManyAuthInput | doctorCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type patientCreateWithoutAuthInput = {
    name: string
    phone_number?: string | null
    reservation?: reservationCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutAuthInput = {
    name: string
    phone_number?: string | null
    reservation?: reservationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutAuthInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
  }

  export type adminUpsertWithoutAuthInput = {
    update: XOR<adminUpdateWithoutAuthInput, adminUncheckedUpdateWithoutAuthInput>
    create: XOR<adminCreateWithoutAuthInput, adminUncheckedCreateWithoutAuthInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutAuthInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutAuthInput, adminUncheckedUpdateWithoutAuthInput>
  }

  export type adminUpdateWithoutAuthInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateWithoutAuthInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type doctorUpsertWithWhereUniqueWithoutAuthInput = {
    where: doctorWhereUniqueInput
    update: XOR<doctorUpdateWithoutAuthInput, doctorUncheckedUpdateWithoutAuthInput>
    create: XOR<doctorCreateWithoutAuthInput, doctorUncheckedCreateWithoutAuthInput>
  }

  export type doctorUpdateWithWhereUniqueWithoutAuthInput = {
    where: doctorWhereUniqueInput
    data: XOR<doctorUpdateWithoutAuthInput, doctorUncheckedUpdateWithoutAuthInput>
  }

  export type doctorUpdateManyWithWhereWithoutAuthInput = {
    where: doctorScalarWhereInput
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutAuthInput>
  }

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[]
    OR?: doctorScalarWhereInput[]
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[]
    user_id?: IntFilter<"doctor"> | number
    doctor_id?: StringFilter<"doctor"> | string
    name?: StringFilter<"doctor"> | string
    gender?: StringNullableFilter<"doctor"> | string | null
    specialization?: StringNullableFilter<"doctor"> | string | null
    phone_number?: StringNullableFilter<"doctor"> | string | null
    experience?: IntFilter<"doctor"> | number
    imgUrl?: StringNullableFilter<"doctor"> | string | null
  }

  export type patientUpsertWithoutAuthInput = {
    update: XOR<patientUpdateWithoutAuthInput, patientUncheckedUpdateWithoutAuthInput>
    create: XOR<patientCreateWithoutAuthInput, patientUncheckedCreateWithoutAuthInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutAuthInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutAuthInput, patientUncheckedUpdateWithoutAuthInput>
  }

  export type patientUpdateWithoutAuthInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutAuthInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type authCreateWithoutDoctorInput = {
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminCreateNestedOneWithoutAuthInput
    patient?: patientCreateNestedOneWithoutAuthInput
  }

  export type authUncheckedCreateWithoutDoctorInput = {
    user_id?: number
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminUncheckedCreateNestedOneWithoutAuthInput
    patient?: patientUncheckedCreateNestedOneWithoutAuthInput
  }

  export type authCreateOrConnectWithoutDoctorInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutDoctorInput, authUncheckedCreateWithoutDoctorInput>
  }

  export type reservationCreateWithoutDoctorInput = {
    reservation_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    patient: patientCreateNestedOneWithoutReservationInput
    review?: reviewCreateNestedManyWithoutReservationInput
  }

  export type reservationUncheckedCreateWithoutDoctorInput = {
    reservation_id: string
    patient_id: number
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    review?: reviewUncheckedCreateNestedManyWithoutReservationInput
  }

  export type reservationCreateOrConnectWithoutDoctorInput = {
    where: reservationWhereUniqueInput
    create: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput>
  }

  export type reservationCreateManyDoctorInputEnvelope = {
    data: reservationCreateManyDoctorInput | reservationCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutDoctorInput = {
    review?: string | null
    reservation: reservationCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutDoctorInput = {
    review_id?: number
    reservation_id: string
    review?: string | null
  }

  export type reviewCreateOrConnectWithoutDoctorInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput>
  }

  export type reviewCreateManyDoctorInputEnvelope = {
    data: reviewCreateManyDoctorInput | reviewCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type authUpsertWithoutDoctorInput = {
    update: XOR<authUpdateWithoutDoctorInput, authUncheckedUpdateWithoutDoctorInput>
    create: XOR<authCreateWithoutDoctorInput, authUncheckedCreateWithoutDoctorInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutDoctorInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutDoctorInput, authUncheckedUpdateWithoutDoctorInput>
  }

  export type authUpdateWithoutDoctorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUpdateOneWithoutAuthNestedInput
    patient?: patientUpdateOneWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutDoctorInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUncheckedUpdateOneWithoutAuthNestedInput
    patient?: patientUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type reservationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: reservationWhereUniqueInput
    update: XOR<reservationUpdateWithoutDoctorInput, reservationUncheckedUpdateWithoutDoctorInput>
    create: XOR<reservationCreateWithoutDoctorInput, reservationUncheckedCreateWithoutDoctorInput>
  }

  export type reservationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: reservationWhereUniqueInput
    data: XOR<reservationUpdateWithoutDoctorInput, reservationUncheckedUpdateWithoutDoctorInput>
  }

  export type reservationUpdateManyWithWhereWithoutDoctorInput = {
    where: reservationScalarWhereInput
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyWithoutDoctorInput>
  }

  export type reservationScalarWhereInput = {
    AND?: reservationScalarWhereInput | reservationScalarWhereInput[]
    OR?: reservationScalarWhereInput[]
    NOT?: reservationScalarWhereInput | reservationScalarWhereInput[]
    reservation_id?: StringFilter<"reservation"> | string
    patient_id?: IntFilter<"reservation"> | number
    doctor_id?: StringFilter<"reservation"> | string
    doctor_name?: StringFilter<"reservation"> | string
    specialization?: StringFilter<"reservation"> | string
    patient_name?: StringFilter<"reservation"> | string
    nik?: StringFilter<"reservation"> | string
    ttl?: StringFilter<"reservation"> | string
    gender?: StringFilter<"reservation"> | string
    phone_number?: StringFilter<"reservation"> | string
    address?: StringFilter<"reservation"> | string
    reservation_date?: DateTimeFilter<"reservation"> | Date | string
    complaint?: StringNullableFilter<"reservation"> | string | null
    status?: Enumreservation_statusFilter<"reservation"> | $Enums.reservation_status
  }

  export type reviewUpsertWithWhereUniqueWithoutDoctorInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutDoctorInput, reviewUncheckedUpdateWithoutDoctorInput>
    create: XOR<reviewCreateWithoutDoctorInput, reviewUncheckedCreateWithoutDoctorInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutDoctorInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutDoctorInput, reviewUncheckedUpdateWithoutDoctorInput>
  }

  export type reviewUpdateManyWithWhereWithoutDoctorInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutDoctorInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    review_id?: IntFilter<"review"> | number
    reservation_id?: StringFilter<"review"> | string
    doctor_id?: StringFilter<"review"> | string
    review?: StringNullableFilter<"review"> | string | null
  }

  export type authCreateWithoutPatientInput = {
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminCreateNestedOneWithoutAuthInput
    doctor?: doctorCreateNestedManyWithoutAuthInput
  }

  export type authUncheckedCreateWithoutPatientInput = {
    user_id?: number
    email: string
    password: string
    role: $Enums.auth_role
    admin?: adminUncheckedCreateNestedOneWithoutAuthInput
    doctor?: doctorUncheckedCreateNestedManyWithoutAuthInput
  }

  export type authCreateOrConnectWithoutPatientInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutPatientInput, authUncheckedCreateWithoutPatientInput>
  }

  export type reservationCreateWithoutPatientInput = {
    reservation_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    doctor: doctorCreateNestedOneWithoutReservationInput
    review?: reviewCreateNestedManyWithoutReservationInput
  }

  export type reservationUncheckedCreateWithoutPatientInput = {
    reservation_id: string
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    review?: reviewUncheckedCreateNestedManyWithoutReservationInput
  }

  export type reservationCreateOrConnectWithoutPatientInput = {
    where: reservationWhereUniqueInput
    create: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput>
  }

  export type reservationCreateManyPatientInputEnvelope = {
    data: reservationCreateManyPatientInput | reservationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type authUpsertWithoutPatientInput = {
    update: XOR<authUpdateWithoutPatientInput, authUncheckedUpdateWithoutPatientInput>
    create: XOR<authCreateWithoutPatientInput, authUncheckedCreateWithoutPatientInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutPatientInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutPatientInput, authUncheckedUpdateWithoutPatientInput>
  }

  export type authUpdateWithoutPatientInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUpdateOneWithoutAuthNestedInput
    doctor?: doctorUpdateManyWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutPatientInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumauth_roleFieldUpdateOperationsInput | $Enums.auth_role
    admin?: adminUncheckedUpdateOneWithoutAuthNestedInput
    doctor?: doctorUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type reservationUpsertWithWhereUniqueWithoutPatientInput = {
    where: reservationWhereUniqueInput
    update: XOR<reservationUpdateWithoutPatientInput, reservationUncheckedUpdateWithoutPatientInput>
    create: XOR<reservationCreateWithoutPatientInput, reservationUncheckedCreateWithoutPatientInput>
  }

  export type reservationUpdateWithWhereUniqueWithoutPatientInput = {
    where: reservationWhereUniqueInput
    data: XOR<reservationUpdateWithoutPatientInput, reservationUncheckedUpdateWithoutPatientInput>
  }

  export type reservationUpdateManyWithWhereWithoutPatientInput = {
    where: reservationScalarWhereInput
    data: XOR<reservationUpdateManyMutationInput, reservationUncheckedUpdateManyWithoutPatientInput>
  }

  export type patientCreateWithoutReservationInput = {
    name: string
    phone_number?: string | null
    auth?: authCreateNestedOneWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutReservationInput = {
    user_id?: number
    name: string
    phone_number?: string | null
  }

  export type patientCreateOrConnectWithoutReservationInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutReservationInput, patientUncheckedCreateWithoutReservationInput>
  }

  export type doctorCreateWithoutReservationInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    auth: authCreateNestedOneWithoutDoctorInput
    review?: reviewCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutReservationInput = {
    user_id: number
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutReservationInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutReservationInput, doctorUncheckedCreateWithoutReservationInput>
  }

  export type reviewCreateWithoutReservationInput = {
    review?: string | null
    doctor: doctorCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutReservationInput = {
    review_id?: number
    doctor_id: string
    review?: string | null
  }

  export type reviewCreateOrConnectWithoutReservationInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput>
  }

  export type reviewCreateManyReservationInputEnvelope = {
    data: reviewCreateManyReservationInput | reviewCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type patientUpsertWithoutReservationInput = {
    update: XOR<patientUpdateWithoutReservationInput, patientUncheckedUpdateWithoutReservationInput>
    create: XOR<patientCreateWithoutReservationInput, patientUncheckedCreateWithoutReservationInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutReservationInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutReservationInput, patientUncheckedUpdateWithoutReservationInput>
  }

  export type patientUpdateWithoutReservationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: authUpdateOneRequiredWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutReservationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doctorUpsertWithoutReservationInput = {
    update: XOR<doctorUpdateWithoutReservationInput, doctorUncheckedUpdateWithoutReservationInput>
    create: XOR<doctorCreateWithoutReservationInput, doctorUncheckedCreateWithoutReservationInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutReservationInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutReservationInput, doctorUncheckedUpdateWithoutReservationInput>
  }

  export type doctorUpdateWithoutReservationInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: authUpdateOneRequiredWithoutDoctorNestedInput
    review?: reviewUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutReservationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type reviewUpsertWithWhereUniqueWithoutReservationInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutReservationInput, reviewUncheckedUpdateWithoutReservationInput>
    create: XOR<reviewCreateWithoutReservationInput, reviewUncheckedCreateWithoutReservationInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutReservationInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutReservationInput, reviewUncheckedUpdateWithoutReservationInput>
  }

  export type reviewUpdateManyWithWhereWithoutReservationInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutReservationInput>
  }

  export type doctorCreateWithoutReviewInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    auth: authCreateNestedOneWithoutDoctorInput
    reservation?: reservationCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutReviewInput = {
    user_id: number
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
    reservation?: reservationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutReviewInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutReviewInput, doctorUncheckedCreateWithoutReviewInput>
  }

  export type reservationCreateWithoutReviewInput = {
    reservation_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
    patient: patientCreateNestedOneWithoutReservationInput
    doctor: doctorCreateNestedOneWithoutReservationInput
  }

  export type reservationUncheckedCreateWithoutReviewInput = {
    reservation_id: string
    patient_id: number
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
  }

  export type reservationCreateOrConnectWithoutReviewInput = {
    where: reservationWhereUniqueInput
    create: XOR<reservationCreateWithoutReviewInput, reservationUncheckedCreateWithoutReviewInput>
  }

  export type doctorUpsertWithoutReviewInput = {
    update: XOR<doctorUpdateWithoutReviewInput, doctorUncheckedUpdateWithoutReviewInput>
    create: XOR<doctorCreateWithoutReviewInput, doctorUncheckedCreateWithoutReviewInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutReviewInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutReviewInput, doctorUncheckedUpdateWithoutReviewInput>
  }

  export type doctorUpdateWithoutReviewInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: authUpdateOneRequiredWithoutDoctorNestedInput
    reservation?: reservationUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutReviewInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type reservationUpsertWithoutReviewInput = {
    update: XOR<reservationUpdateWithoutReviewInput, reservationUncheckedUpdateWithoutReviewInput>
    create: XOR<reservationCreateWithoutReviewInput, reservationUncheckedCreateWithoutReviewInput>
    where?: reservationWhereInput
  }

  export type reservationUpdateToOneWithWhereWithoutReviewInput = {
    where?: reservationWhereInput
    data: XOR<reservationUpdateWithoutReviewInput, reservationUncheckedUpdateWithoutReviewInput>
  }

  export type reservationUpdateWithoutReviewInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    patient?: patientUpdateOneRequiredWithoutReservationNestedInput
    doctor?: doctorUpdateOneRequiredWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateWithoutReviewInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
  }

  export type doctorCreateManyAuthInput = {
    doctor_id: string
    name: string
    gender?: string | null
    specialization?: string | null
    phone_number?: string | null
    experience: number
    imgUrl?: string | null
  }

  export type doctorUpdateWithoutAuthInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUpdateManyWithoutDoctorNestedInput
    review?: reviewUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutAuthInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUncheckedUpdateManyWithoutDoctorNestedInput
    review?: reviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateManyWithoutAuthInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationCreateManyDoctorInput = {
    reservation_id: string
    patient_id: number
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
  }

  export type reviewCreateManyDoctorInput = {
    review_id?: number
    reservation_id: string
    review?: string | null
  }

  export type reservationUpdateWithoutDoctorInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    patient?: patientUpdateOneRequiredWithoutReservationNestedInput
    review?: reviewUpdateManyWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateWithoutDoctorInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    review?: reviewUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateManyWithoutDoctorInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
  }

  export type reviewUpdateWithoutDoctorInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: reservationUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutDoctorInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateManyWithoutDoctorInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservationCreateManyPatientInput = {
    reservation_id: string
    doctor_id: string
    doctor_name: string
    specialization: string
    patient_name: string
    nik: string
    ttl: string
    gender: string
    phone_number: string
    address: string
    reservation_date: Date | string
    complaint?: string | null
    status: $Enums.reservation_status
  }

  export type reservationUpdateWithoutPatientInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    doctor?: doctorUpdateOneRequiredWithoutReservationNestedInput
    review?: reviewUpdateManyWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateWithoutPatientInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
    review?: reviewUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type reservationUncheckedUpdateManyWithoutPatientInput = {
    reservation_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    doctor_name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    ttl?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreservation_statusFieldUpdateOperationsInput | $Enums.reservation_status
  }

  export type reviewCreateManyReservationInput = {
    review_id?: number
    doctor_id: string
    review?: string | null
  }

  export type reviewUpdateWithoutReservationInput = {
    review?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: doctorUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutReservationInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUncheckedUpdateManyWithoutReservationInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthCountOutputTypeDefaultArgs instead
     */
    export type AuthCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
     */
    export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationCountOutputTypeDefaultArgs instead
     */
    export type ReservationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use authDefaultArgs instead
     */
    export type authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authDefaultArgs<ExtArgs>
    /**
     * @deprecated Use doctorDefaultArgs instead
     */
    export type doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = doctorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use patientDefaultArgs instead
     */
    export type patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = patientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reservationDefaultArgs instead
     */
    export type reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reviewDefaultArgs instead
     */
    export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reviewDefaultArgs<ExtArgs>

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