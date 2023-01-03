# RAII - Resource Acquisition is Initialization

Funny acronym for a small job.

It is a C++ programming technique which binds the life cycle of a resource that must be acquired before use, to the lifetime of an object.
Resource could be heap memory, thread of execution, open file, lock mutex - anything that exists in limited supply.


!["RAII"](./public/raii.png)

RAII can be summarized as follows:

- encapsulate each resource into a class, where
    - the constructor acquires the resource and establishes all class invariants or throws an exception if that cannot be done
    - the destructor releases the resource and never throws exceptions;
- always use the resource via an instance of a RAII-class that either
    - has automatic storage duration or temporary lifetime itself, or
    - has lifetime that is bounded by the lifetime of an automatic or temporary object

Some STL RAII classes are :
- `std::string`
- `std::vector`
- `std::jthread`
- `std::lock_guard`

## Code Example

<details>
    <summary>Dynamic Array</summary>

```cpp

#include<iostream>

using namespace std;

class CustomArray {
public:
    CustomArray(int size) {
        arr = new int(size); // allocating memory
    }
    ~CustomArray() {
        delete arr; // deallocating memory
    }

    bool set(int index, int val) {
        if(index >= size or index < 0) return false; // failed to set value
        arr[index] = val;
        return true;
    }

    int get(int index) {
        if(index >= size or index < 0) return -1; // failed to get value
        return arr[index];
    }

    int getSize() {
        return this->size;
    }

    int front() {
        if(size > 0)    return arr[0];
    }

    int back() {
        if(size > 0)    return arr[size-1];
    }
private:
    int *arr;
    int size;
};


void arrayDemoGood() {
    CustomArray myArr(10);
    for(int i = 0; i < 10; i++) {
        cout << myArr.set(i, i*i) << endl;
    }

    for(int i = 0; i < 10; i++) {
        cout << myArr.get(i) << endl;
    }
    // when arr goes out of scope, the memory is freed by the destructor
}


void arrayDemoBad() {
    int* arr = new int(10);

    for(int i = 0; i < 10; i++) arr[i] = i;

    for(int i = 0; i < 10; i++) cout << arr[i] << endl;

    // memory leak - not deallocating memory used by arr
}



int main() {
    arrayDemoBad();
    cout << "----------------------------------------\n";
    arrayDemoGood();
    return 0;
}

```

</details>

<details>
    <summary>Mutex lock</summary>


```cpp

#include<iostream>
#include<mutex>

using namespace std;

std::mutex globalMutex;

void criticalSection(int n) {
    cout << "CRITICAL CODE" << endl;
    if(n%69 == 0) throw "Not allowed";
}

void mutexDemoGood() {
    lock_guard<mutex> lk(globalMutex);
    criticalSection(69*4 + 1);
}

void mutexDemoBad() {
    globalMutex.lock();
    criticalSection(69*3 + 1); // if this function throws an exception, then mutex lock is never released - bad situation
    globalMutex.unlock();
}

int main() {
    mutexDemoBad();
    mutexDemoGood();
    return 0;
}

```

</details>