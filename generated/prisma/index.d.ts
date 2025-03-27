
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
 * Model TripData
 * 
 */
export type TripData = $Result.DefaultSelection<Prisma.$TripDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TripData
 * const tripData = await prisma.tripData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TripData
   * const tripData = await prisma.tripData.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tripData`: Exposes CRUD operations for the **TripData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripData
    * const tripData = await prisma.tripData.findMany()
    * ```
    */
  get tripData(): Prisma.TripDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TripData: 'TripData'
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
      modelProps: "tripData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TripData: {
        payload: Prisma.$TripDataPayload<ExtArgs>
        fields: Prisma.TripDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          findFirst: {
            args: Prisma.TripDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          findMany: {
            args: Prisma.TripDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>[]
          }
          create: {
            args: Prisma.TripDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          createMany: {
            args: Prisma.TripDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>[]
          }
          delete: {
            args: Prisma.TripDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          update: {
            args: Prisma.TripDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          deleteMany: {
            args: Prisma.TripDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>[]
          }
          upsert: {
            args: Prisma.TripDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDataPayload>
          }
          aggregate: {
            args: Prisma.TripDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripData>
          }
          groupBy: {
            args: Prisma.TripDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripDataCountArgs<ExtArgs>
            result: $Utils.Optional<TripDataCountAggregateOutputType> | number
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
    tripData?: TripDataOmit
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
   * Models
   */

  /**
   * Model TripData
   */

  export type AggregateTripData = {
    _count: TripDataCountAggregateOutputType | null
    _avg: TripDataAvgAggregateOutputType | null
    _sum: TripDataSumAggregateOutputType | null
    _min: TripDataMinAggregateOutputType | null
    _max: TripDataMaxAggregateOutputType | null
  }

  export type TripDataAvgAggregateOutputType = {
    id: number | null
    start_lat: number | null
    start_lng: number | null
    end_lat: number | null
    end_lng: number | null
  }

  export type TripDataSumAggregateOutputType = {
    id: number | null
    start_lat: number | null
    start_lng: number | null
    end_lat: number | null
    end_lng: number | null
  }

  export type TripDataMinAggregateOutputType = {
    id: number | null
    ride_id: string | null
    rideable_type: string | null
    started_at: Date | null
    ended_at: Date | null
    start_station_name: string | null
    start_station_id: string | null
    end_station_name: string | null
    end_station_id: string | null
    start_lat: number | null
    start_lng: number | null
    end_lat: number | null
    end_lng: number | null
    member_casual: string | null
  }

  export type TripDataMaxAggregateOutputType = {
    id: number | null
    ride_id: string | null
    rideable_type: string | null
    started_at: Date | null
    ended_at: Date | null
    start_station_name: string | null
    start_station_id: string | null
    end_station_name: string | null
    end_station_id: string | null
    start_lat: number | null
    start_lng: number | null
    end_lat: number | null
    end_lng: number | null
    member_casual: string | null
  }

  export type TripDataCountAggregateOutputType = {
    id: number
    ride_id: number
    rideable_type: number
    started_at: number
    ended_at: number
    start_station_name: number
    start_station_id: number
    end_station_name: number
    end_station_id: number
    start_lat: number
    start_lng: number
    end_lat: number
    end_lng: number
    member_casual: number
    _all: number
  }


  export type TripDataAvgAggregateInputType = {
    id?: true
    start_lat?: true
    start_lng?: true
    end_lat?: true
    end_lng?: true
  }

  export type TripDataSumAggregateInputType = {
    id?: true
    start_lat?: true
    start_lng?: true
    end_lat?: true
    end_lng?: true
  }

  export type TripDataMinAggregateInputType = {
    id?: true
    ride_id?: true
    rideable_type?: true
    started_at?: true
    ended_at?: true
    start_station_name?: true
    start_station_id?: true
    end_station_name?: true
    end_station_id?: true
    start_lat?: true
    start_lng?: true
    end_lat?: true
    end_lng?: true
    member_casual?: true
  }

  export type TripDataMaxAggregateInputType = {
    id?: true
    ride_id?: true
    rideable_type?: true
    started_at?: true
    ended_at?: true
    start_station_name?: true
    start_station_id?: true
    end_station_name?: true
    end_station_id?: true
    start_lat?: true
    start_lng?: true
    end_lat?: true
    end_lng?: true
    member_casual?: true
  }

  export type TripDataCountAggregateInputType = {
    id?: true
    ride_id?: true
    rideable_type?: true
    started_at?: true
    ended_at?: true
    start_station_name?: true
    start_station_id?: true
    end_station_name?: true
    end_station_id?: true
    start_lat?: true
    start_lng?: true
    end_lat?: true
    end_lng?: true
    member_casual?: true
    _all?: true
  }

  export type TripDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripData to aggregate.
     */
    where?: TripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripData to fetch.
     */
    orderBy?: TripDataOrderByWithRelationInput | TripDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripData
    **/
    _count?: true | TripDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripDataMaxAggregateInputType
  }

  export type GetTripDataAggregateType<T extends TripDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTripData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripData[P]>
      : GetScalarType<T[P], AggregateTripData[P]>
  }




  export type TripDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDataWhereInput
    orderBy?: TripDataOrderByWithAggregationInput | TripDataOrderByWithAggregationInput[]
    by: TripDataScalarFieldEnum[] | TripDataScalarFieldEnum
    having?: TripDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripDataCountAggregateInputType | true
    _avg?: TripDataAvgAggregateInputType
    _sum?: TripDataSumAggregateInputType
    _min?: TripDataMinAggregateInputType
    _max?: TripDataMaxAggregateInputType
  }

  export type TripDataGroupByOutputType = {
    id: number
    ride_id: string
    rideable_type: string
    started_at: Date
    ended_at: Date
    start_station_name: string | null
    start_station_id: string | null
    end_station_name: string | null
    end_station_id: string | null
    start_lat: number
    start_lng: number
    end_lat: number | null
    end_lng: number | null
    member_casual: string
    _count: TripDataCountAggregateOutputType | null
    _avg: TripDataAvgAggregateOutputType | null
    _sum: TripDataSumAggregateOutputType | null
    _min: TripDataMinAggregateOutputType | null
    _max: TripDataMaxAggregateOutputType | null
  }

  type GetTripDataGroupByPayload<T extends TripDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripDataGroupByOutputType[P]>
            : GetScalarType<T[P], TripDataGroupByOutputType[P]>
        }
      >
    >


  export type TripDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    rideable_type?: boolean
    started_at?: boolean
    ended_at?: boolean
    start_station_name?: boolean
    start_station_id?: boolean
    end_station_name?: boolean
    end_station_id?: boolean
    start_lat?: boolean
    start_lng?: boolean
    end_lat?: boolean
    end_lng?: boolean
    member_casual?: boolean
  }, ExtArgs["result"]["tripData"]>

  export type TripDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    rideable_type?: boolean
    started_at?: boolean
    ended_at?: boolean
    start_station_name?: boolean
    start_station_id?: boolean
    end_station_name?: boolean
    end_station_id?: boolean
    start_lat?: boolean
    start_lng?: boolean
    end_lat?: boolean
    end_lng?: boolean
    member_casual?: boolean
  }, ExtArgs["result"]["tripData"]>

  export type TripDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    rideable_type?: boolean
    started_at?: boolean
    ended_at?: boolean
    start_station_name?: boolean
    start_station_id?: boolean
    end_station_name?: boolean
    end_station_id?: boolean
    start_lat?: boolean
    start_lng?: boolean
    end_lat?: boolean
    end_lng?: boolean
    member_casual?: boolean
  }, ExtArgs["result"]["tripData"]>

  export type TripDataSelectScalar = {
    id?: boolean
    ride_id?: boolean
    rideable_type?: boolean
    started_at?: boolean
    ended_at?: boolean
    start_station_name?: boolean
    start_station_id?: boolean
    end_station_name?: boolean
    end_station_id?: boolean
    start_lat?: boolean
    start_lng?: boolean
    end_lat?: boolean
    end_lng?: boolean
    member_casual?: boolean
  }

  export type TripDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ride_id" | "rideable_type" | "started_at" | "ended_at" | "start_station_name" | "start_station_id" | "end_station_name" | "end_station_id" | "start_lat" | "start_lng" | "end_lat" | "end_lng" | "member_casual", ExtArgs["result"]["tripData"]>

  export type $TripDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ride_id: string
      rideable_type: string
      started_at: Date
      ended_at: Date
      start_station_name: string | null
      start_station_id: string | null
      end_station_name: string | null
      end_station_id: string | null
      start_lat: number
      start_lng: number
      end_lat: number | null
      end_lng: number | null
      member_casual: string
    }, ExtArgs["result"]["tripData"]>
    composites: {}
  }

  type TripDataGetPayload<S extends boolean | null | undefined | TripDataDefaultArgs> = $Result.GetResult<Prisma.$TripDataPayload, S>

  type TripDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripDataCountAggregateInputType | true
    }

  export interface TripDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripData'], meta: { name: 'TripData' } }
    /**
     * Find zero or one TripData that matches the filter.
     * @param {TripDataFindUniqueArgs} args - Arguments to find a TripData
     * @example
     * // Get one TripData
     * const tripData = await prisma.tripData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripDataFindUniqueArgs>(args: SelectSubset<T, TripDataFindUniqueArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripDataFindUniqueOrThrowArgs} args - Arguments to find a TripData
     * @example
     * // Get one TripData
     * const tripData = await prisma.tripData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TripDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataFindFirstArgs} args - Arguments to find a TripData
     * @example
     * // Get one TripData
     * const tripData = await prisma.tripData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripDataFindFirstArgs>(args?: SelectSubset<T, TripDataFindFirstArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataFindFirstOrThrowArgs} args - Arguments to find a TripData
     * @example
     * // Get one TripData
     * const tripData = await prisma.tripData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TripDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripData
     * const tripData = await prisma.tripData.findMany()
     * 
     * // Get first 10 TripData
     * const tripData = await prisma.tripData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripDataWithIdOnly = await prisma.tripData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripDataFindManyArgs>(args?: SelectSubset<T, TripDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripData.
     * @param {TripDataCreateArgs} args - Arguments to create a TripData.
     * @example
     * // Create one TripData
     * const TripData = await prisma.tripData.create({
     *   data: {
     *     // ... data to create a TripData
     *   }
     * })
     * 
     */
    create<T extends TripDataCreateArgs>(args: SelectSubset<T, TripDataCreateArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripData.
     * @param {TripDataCreateManyArgs} args - Arguments to create many TripData.
     * @example
     * // Create many TripData
     * const tripData = await prisma.tripData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripDataCreateManyArgs>(args?: SelectSubset<T, TripDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripData and returns the data saved in the database.
     * @param {TripDataCreateManyAndReturnArgs} args - Arguments to create many TripData.
     * @example
     * // Create many TripData
     * const tripData = await prisma.tripData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripData and only return the `id`
     * const tripDataWithIdOnly = await prisma.tripData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripDataCreateManyAndReturnArgs>(args?: SelectSubset<T, TripDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripData.
     * @param {TripDataDeleteArgs} args - Arguments to delete one TripData.
     * @example
     * // Delete one TripData
     * const TripData = await prisma.tripData.delete({
     *   where: {
     *     // ... filter to delete one TripData
     *   }
     * })
     * 
     */
    delete<T extends TripDataDeleteArgs>(args: SelectSubset<T, TripDataDeleteArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripData.
     * @param {TripDataUpdateArgs} args - Arguments to update one TripData.
     * @example
     * // Update one TripData
     * const tripData = await prisma.tripData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripDataUpdateArgs>(args: SelectSubset<T, TripDataUpdateArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripData.
     * @param {TripDataDeleteManyArgs} args - Arguments to filter TripData to delete.
     * @example
     * // Delete a few TripData
     * const { count } = await prisma.tripData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDataDeleteManyArgs>(args?: SelectSubset<T, TripDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripData
     * const tripData = await prisma.tripData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripDataUpdateManyArgs>(args: SelectSubset<T, TripDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripData and returns the data updated in the database.
     * @param {TripDataUpdateManyAndReturnArgs} args - Arguments to update many TripData.
     * @example
     * // Update many TripData
     * const tripData = await prisma.tripData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripData and only return the `id`
     * const tripDataWithIdOnly = await prisma.tripData.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TripDataUpdateManyAndReturnArgs>(args: SelectSubset<T, TripDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripData.
     * @param {TripDataUpsertArgs} args - Arguments to update or create a TripData.
     * @example
     * // Update or create a TripData
     * const tripData = await prisma.tripData.upsert({
     *   create: {
     *     // ... data to create a TripData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripData we want to update
     *   }
     * })
     */
    upsert<T extends TripDataUpsertArgs>(args: SelectSubset<T, TripDataUpsertArgs<ExtArgs>>): Prisma__TripDataClient<$Result.GetResult<Prisma.$TripDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataCountArgs} args - Arguments to filter TripData to count.
     * @example
     * // Count the number of TripData
     * const count = await prisma.tripData.count({
     *   where: {
     *     // ... the filter for the TripData we want to count
     *   }
     * })
    **/
    count<T extends TripDataCountArgs>(
      args?: Subset<T, TripDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripDataAggregateArgs>(args: Subset<T, TripDataAggregateArgs>): Prisma.PrismaPromise<GetTripDataAggregateType<T>>

    /**
     * Group by TripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDataGroupByArgs} args - Group by arguments.
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
      T extends TripDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripDataGroupByArgs['orderBy'] }
        : { orderBy?: TripDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripData model
   */
  readonly fields: TripDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TripData model
   */ 
  interface TripDataFieldRefs {
    readonly id: FieldRef<"TripData", 'Int'>
    readonly ride_id: FieldRef<"TripData", 'String'>
    readonly rideable_type: FieldRef<"TripData", 'String'>
    readonly started_at: FieldRef<"TripData", 'DateTime'>
    readonly ended_at: FieldRef<"TripData", 'DateTime'>
    readonly start_station_name: FieldRef<"TripData", 'String'>
    readonly start_station_id: FieldRef<"TripData", 'String'>
    readonly end_station_name: FieldRef<"TripData", 'String'>
    readonly end_station_id: FieldRef<"TripData", 'String'>
    readonly start_lat: FieldRef<"TripData", 'Float'>
    readonly start_lng: FieldRef<"TripData", 'Float'>
    readonly end_lat: FieldRef<"TripData", 'Float'>
    readonly end_lng: FieldRef<"TripData", 'Float'>
    readonly member_casual: FieldRef<"TripData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripData findUnique
   */
  export type TripDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter, which TripData to fetch.
     */
    where: TripDataWhereUniqueInput
  }

  /**
   * TripData findUniqueOrThrow
   */
  export type TripDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter, which TripData to fetch.
     */
    where: TripDataWhereUniqueInput
  }

  /**
   * TripData findFirst
   */
  export type TripDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter, which TripData to fetch.
     */
    where?: TripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripData to fetch.
     */
    orderBy?: TripDataOrderByWithRelationInput | TripDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripData.
     */
    cursor?: TripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripData.
     */
    distinct?: TripDataScalarFieldEnum | TripDataScalarFieldEnum[]
  }

  /**
   * TripData findFirstOrThrow
   */
  export type TripDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter, which TripData to fetch.
     */
    where?: TripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripData to fetch.
     */
    orderBy?: TripDataOrderByWithRelationInput | TripDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripData.
     */
    cursor?: TripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripData.
     */
    distinct?: TripDataScalarFieldEnum | TripDataScalarFieldEnum[]
  }

  /**
   * TripData findMany
   */
  export type TripDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter, which TripData to fetch.
     */
    where?: TripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripData to fetch.
     */
    orderBy?: TripDataOrderByWithRelationInput | TripDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripData.
     */
    cursor?: TripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripData.
     */
    skip?: number
    distinct?: TripDataScalarFieldEnum | TripDataScalarFieldEnum[]
  }

  /**
   * TripData create
   */
  export type TripDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * The data needed to create a TripData.
     */
    data: XOR<TripDataCreateInput, TripDataUncheckedCreateInput>
  }

  /**
   * TripData createMany
   */
  export type TripDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripData.
     */
    data: TripDataCreateManyInput | TripDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripData createManyAndReturn
   */
  export type TripDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * The data used to create many TripData.
     */
    data: TripDataCreateManyInput | TripDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripData update
   */
  export type TripDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * The data needed to update a TripData.
     */
    data: XOR<TripDataUpdateInput, TripDataUncheckedUpdateInput>
    /**
     * Choose, which TripData to update.
     */
    where: TripDataWhereUniqueInput
  }

  /**
   * TripData updateMany
   */
  export type TripDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripData.
     */
    data: XOR<TripDataUpdateManyMutationInput, TripDataUncheckedUpdateManyInput>
    /**
     * Filter which TripData to update
     */
    where?: TripDataWhereInput
    /**
     * Limit how many TripData to update.
     */
    limit?: number
  }

  /**
   * TripData updateManyAndReturn
   */
  export type TripDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * The data used to update TripData.
     */
    data: XOR<TripDataUpdateManyMutationInput, TripDataUncheckedUpdateManyInput>
    /**
     * Filter which TripData to update
     */
    where?: TripDataWhereInput
    /**
     * Limit how many TripData to update.
     */
    limit?: number
  }

  /**
   * TripData upsert
   */
  export type TripDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * The filter to search for the TripData to update in case it exists.
     */
    where: TripDataWhereUniqueInput
    /**
     * In case the TripData found by the `where` argument doesn't exist, create a new TripData with this data.
     */
    create: XOR<TripDataCreateInput, TripDataUncheckedCreateInput>
    /**
     * In case the TripData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripDataUpdateInput, TripDataUncheckedUpdateInput>
  }

  /**
   * TripData delete
   */
  export type TripDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
    /**
     * Filter which TripData to delete.
     */
    where: TripDataWhereUniqueInput
  }

  /**
   * TripData deleteMany
   */
  export type TripDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripData to delete
     */
    where?: TripDataWhereInput
    /**
     * Limit how many TripData to delete.
     */
    limit?: number
  }

  /**
   * TripData without action
   */
  export type TripDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripData
     */
    select?: TripDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripData
     */
    omit?: TripDataOmit<ExtArgs> | null
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


  export const TripDataScalarFieldEnum: {
    id: 'id',
    ride_id: 'ride_id',
    rideable_type: 'rideable_type',
    started_at: 'started_at',
    ended_at: 'ended_at',
    start_station_name: 'start_station_name',
    start_station_id: 'start_station_id',
    end_station_name: 'end_station_name',
    end_station_id: 'end_station_id',
    start_lat: 'start_lat',
    start_lng: 'start_lng',
    end_lat: 'end_lat',
    end_lng: 'end_lng',
    member_casual: 'member_casual'
  };

  export type TripDataScalarFieldEnum = (typeof TripDataScalarFieldEnum)[keyof typeof TripDataScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type TripDataWhereInput = {
    AND?: TripDataWhereInput | TripDataWhereInput[]
    OR?: TripDataWhereInput[]
    NOT?: TripDataWhereInput | TripDataWhereInput[]
    id?: IntFilter<"TripData"> | number
    ride_id?: StringFilter<"TripData"> | string
    rideable_type?: StringFilter<"TripData"> | string
    started_at?: DateTimeFilter<"TripData"> | Date | string
    ended_at?: DateTimeFilter<"TripData"> | Date | string
    start_station_name?: StringNullableFilter<"TripData"> | string | null
    start_station_id?: StringNullableFilter<"TripData"> | string | null
    end_station_name?: StringNullableFilter<"TripData"> | string | null
    end_station_id?: StringNullableFilter<"TripData"> | string | null
    start_lat?: FloatFilter<"TripData"> | number
    start_lng?: FloatFilter<"TripData"> | number
    end_lat?: FloatNullableFilter<"TripData"> | number | null
    end_lng?: FloatNullableFilter<"TripData"> | number | null
    member_casual?: StringFilter<"TripData"> | string
  }

  export type TripDataOrderByWithRelationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    rideable_type?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    start_station_name?: SortOrderInput | SortOrder
    start_station_id?: SortOrderInput | SortOrder
    end_station_name?: SortOrderInput | SortOrder
    end_station_id?: SortOrderInput | SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrderInput | SortOrder
    end_lng?: SortOrderInput | SortOrder
    member_casual?: SortOrder
  }

  export type TripDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ride_id?: string
    AND?: TripDataWhereInput | TripDataWhereInput[]
    OR?: TripDataWhereInput[]
    NOT?: TripDataWhereInput | TripDataWhereInput[]
    rideable_type?: StringFilter<"TripData"> | string
    started_at?: DateTimeFilter<"TripData"> | Date | string
    ended_at?: DateTimeFilter<"TripData"> | Date | string
    start_station_name?: StringNullableFilter<"TripData"> | string | null
    start_station_id?: StringNullableFilter<"TripData"> | string | null
    end_station_name?: StringNullableFilter<"TripData"> | string | null
    end_station_id?: StringNullableFilter<"TripData"> | string | null
    start_lat?: FloatFilter<"TripData"> | number
    start_lng?: FloatFilter<"TripData"> | number
    end_lat?: FloatNullableFilter<"TripData"> | number | null
    end_lng?: FloatNullableFilter<"TripData"> | number | null
    member_casual?: StringFilter<"TripData"> | string
  }, "id" | "ride_id">

  export type TripDataOrderByWithAggregationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    rideable_type?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    start_station_name?: SortOrderInput | SortOrder
    start_station_id?: SortOrderInput | SortOrder
    end_station_name?: SortOrderInput | SortOrder
    end_station_id?: SortOrderInput | SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrderInput | SortOrder
    end_lng?: SortOrderInput | SortOrder
    member_casual?: SortOrder
    _count?: TripDataCountOrderByAggregateInput
    _avg?: TripDataAvgOrderByAggregateInput
    _max?: TripDataMaxOrderByAggregateInput
    _min?: TripDataMinOrderByAggregateInput
    _sum?: TripDataSumOrderByAggregateInput
  }

  export type TripDataScalarWhereWithAggregatesInput = {
    AND?: TripDataScalarWhereWithAggregatesInput | TripDataScalarWhereWithAggregatesInput[]
    OR?: TripDataScalarWhereWithAggregatesInput[]
    NOT?: TripDataScalarWhereWithAggregatesInput | TripDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripData"> | number
    ride_id?: StringWithAggregatesFilter<"TripData"> | string
    rideable_type?: StringWithAggregatesFilter<"TripData"> | string
    started_at?: DateTimeWithAggregatesFilter<"TripData"> | Date | string
    ended_at?: DateTimeWithAggregatesFilter<"TripData"> | Date | string
    start_station_name?: StringNullableWithAggregatesFilter<"TripData"> | string | null
    start_station_id?: StringNullableWithAggregatesFilter<"TripData"> | string | null
    end_station_name?: StringNullableWithAggregatesFilter<"TripData"> | string | null
    end_station_id?: StringNullableWithAggregatesFilter<"TripData"> | string | null
    start_lat?: FloatWithAggregatesFilter<"TripData"> | number
    start_lng?: FloatWithAggregatesFilter<"TripData"> | number
    end_lat?: FloatNullableWithAggregatesFilter<"TripData"> | number | null
    end_lng?: FloatNullableWithAggregatesFilter<"TripData"> | number | null
    member_casual?: StringWithAggregatesFilter<"TripData"> | string
  }

  export type TripDataCreateInput = {
    ride_id: string
    rideable_type: string
    started_at: Date | string
    ended_at: Date | string
    start_station_name?: string | null
    start_station_id?: string | null
    end_station_name?: string | null
    end_station_id?: string | null
    start_lat: number
    start_lng: number
    end_lat?: number | null
    end_lng?: number | null
    member_casual: string
  }

  export type TripDataUncheckedCreateInput = {
    id?: number
    ride_id: string
    rideable_type: string
    started_at: Date | string
    ended_at: Date | string
    start_station_name?: string | null
    start_station_id?: string | null
    end_station_name?: string | null
    end_station_id?: string | null
    start_lat: number
    start_lng: number
    end_lat?: number | null
    end_lng?: number | null
    member_casual: string
  }

  export type TripDataUpdateInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    rideable_type?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_lat?: FloatFieldUpdateOperationsInput | number
    start_lng?: FloatFieldUpdateOperationsInput | number
    end_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    end_lng?: NullableFloatFieldUpdateOperationsInput | number | null
    member_casual?: StringFieldUpdateOperationsInput | string
  }

  export type TripDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ride_id?: StringFieldUpdateOperationsInput | string
    rideable_type?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_lat?: FloatFieldUpdateOperationsInput | number
    start_lng?: FloatFieldUpdateOperationsInput | number
    end_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    end_lng?: NullableFloatFieldUpdateOperationsInput | number | null
    member_casual?: StringFieldUpdateOperationsInput | string
  }

  export type TripDataCreateManyInput = {
    id?: number
    ride_id: string
    rideable_type: string
    started_at: Date | string
    ended_at: Date | string
    start_station_name?: string | null
    start_station_id?: string | null
    end_station_name?: string | null
    end_station_id?: string | null
    start_lat: number
    start_lng: number
    end_lat?: number | null
    end_lng?: number | null
    member_casual: string
  }

  export type TripDataUpdateManyMutationInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    rideable_type?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_lat?: FloatFieldUpdateOperationsInput | number
    start_lng?: FloatFieldUpdateOperationsInput | number
    end_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    end_lng?: NullableFloatFieldUpdateOperationsInput | number | null
    member_casual?: StringFieldUpdateOperationsInput | string
  }

  export type TripDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ride_id?: StringFieldUpdateOperationsInput | string
    rideable_type?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ended_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_name?: NullableStringFieldUpdateOperationsInput | string | null
    end_station_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_lat?: FloatFieldUpdateOperationsInput | number
    start_lng?: FloatFieldUpdateOperationsInput | number
    end_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    end_lng?: NullableFloatFieldUpdateOperationsInput | number | null
    member_casual?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripDataCountOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    rideable_type?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    start_station_name?: SortOrder
    start_station_id?: SortOrder
    end_station_name?: SortOrder
    end_station_id?: SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrder
    end_lng?: SortOrder
    member_casual?: SortOrder
  }

  export type TripDataAvgOrderByAggregateInput = {
    id?: SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrder
    end_lng?: SortOrder
  }

  export type TripDataMaxOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    rideable_type?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    start_station_name?: SortOrder
    start_station_id?: SortOrder
    end_station_name?: SortOrder
    end_station_id?: SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrder
    end_lng?: SortOrder
    member_casual?: SortOrder
  }

  export type TripDataMinOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    rideable_type?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    start_station_name?: SortOrder
    start_station_id?: SortOrder
    end_station_name?: SortOrder
    end_station_id?: SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrder
    end_lng?: SortOrder
    member_casual?: SortOrder
  }

  export type TripDataSumOrderByAggregateInput = {
    id?: SortOrder
    start_lat?: SortOrder
    start_lng?: SortOrder
    end_lat?: SortOrder
    end_lng?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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