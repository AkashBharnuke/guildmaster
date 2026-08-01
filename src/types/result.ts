export type Success<T> = {
    success: true;
    data: T;
}

export type Failure<E = Error> = {
    success: false;
    error: E;
}

export type Result<T, E = Error> = Success<T> | Failure<E>;

export function ok<T>(data: T): Success<T> {
    return {
        success: true,
        data
    };
}


export function err<E>(error: E): Failure<E> {
    return {
        success: false,
        error
    };
}
