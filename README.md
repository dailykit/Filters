# Filters

Filter out the required content from an array of objects based on a set of conditions with the help of a single function.

## Getting Started

A single function is to be used to search for objects in an array of objects in which a key that is to be found exists or has a value that matches a certain criteria. 

**Note**: The algorithm will not only search for a matching condition in the main object but also the nested objects.  

### Syntax

```
filter({key,value}<Object>, operation<string>, data<Array<Object>>);
```

### Usage

There are three categories of filters that are being used based on the data type for which the filtering is to be done.

* Number Filters
* String Filters
* Date Filters

Below is the syntax of how to use the filter function for different data types.

1. Number Filters

    * Equality 
    ```
        filter({key: x<string>, value: y<number>}, 'eq', data<Array<Object>>);
    ```

    * Less than 
    ```
        filter({key: x<string>, value: y<number>}, 'lt', data<Array<Object>>);
    ```

    * Less than or equal 
    ```
        filter({key: x<string>, value: y<number>}, 'lte', data<Array<Object>>);
    ```

    * Greater than 
    ```
        filter({key: x<string>, value: y<number>}, 'gt', data<Array<Object>>);
    ```

    * Greater than or equal 
    ```
        filter({key: x<string>, value: y<number>}, 'gte', data<Array<Object>>);
    ```

    * Between 
    ```
        filter({key: x<string>, min: y<number>, max: z<number>}, 'between', data<Array<Object>>);
    ```

2. String Filters 

    * Equality 
    ```
        filter({key: x<string>, value: y<string>}, 'eq', data<Array<Object>>);
    ```

    * Contain Exactly
    ```
        filter({key: x<string>, value: y<string>}, 'ce', data<Array<Object>>);
    ```

    * Not Contain Exactly
    ```
        filter({key: x<string>, value: y<string>}, 'nce', data<Array<Object>>);
    ```

    * Is any of - key has a value which is equal to any of the values given as an input.
    ```
        filter({key: x<string>, value: y<Array<string>>}, 'anyof', data<Array<Object>>);
    ```

    * Is none of - key has a value which is equal to none of the values given as an input.
    ```
        filter({key: x<string>, value: y<Array<string>>}, 'noneof', data<Array<Object>>);
    ```

3. Date Filters 

    * Equality 
    ```
        filter({key: x<string>, value: y<string>}, 'eq', data<Array<Object>>);
    ```

    * Before 
    ```
        filter({key: x<string>, value: y<string>}, 'before', data<Array<Object>>);
    ```

    * After 
    ```
        filter({key: x<string>, value: y<string>}, 'after', data<Array<Object>>);
    ```

    * Between 
    ```
        filter({key: x<string>, min: y<string>, max: z<string>}, 'between', data<Array<Object>>);
    ```

4. Boolean Filters

    * Equality 
    ```
        filter({key: x<string>, value: y<boolean>}, 'eq', data<Array<Object>>);
    ```

5. Generic Filters

    * Known 
    ```
        filter({key: x<string>}, 'known', data<Array<Object>>);
    ```
    * Unknown 
    ```
        filter({key: x<string>}, 'unknown', data<Array<Object>>);

## Built With

* [Nodejs](https://nodejs.org/en/)

## Testing 

For testing, open the terminal in the directory where the index file is and run the following command.
> npm run test-watch

## Authors

* **Suyash Awasthi** - *Initial work* - [Filters](https://github.com/dailykit/Filters)

Guided by [Praveen Bisht](https://github.com/prvnbist)
