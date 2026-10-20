// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     int a, b, c;

//     printf("Enter first number :");
//     scanf("%d", &a);
//     printf("Enter second number :");
//     scanf("%d", &b);
//     printf("Enter third number :");
//     scanf("%d", &c);

//     int sum = a+b+c;
//     int avg = sum/3;
//     printf("Average of these three numbers is : %d \n", avg);

//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main(){

//     int smallest, new_inpt ;
//     printf("Enter 10 numbers here! \n");
//     scanf("%d", &smallest);

//     for(int i=1; i<10; i++){
//         scanf("%d", &new_inpt);
//         if(smallest>new_inpt){
//             smallest = new_inpt;
//         }
//     }
//     printf("smallest : %d", smallest);
//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     char ch;
//     printf("Enter your character here !");
//     scanf("%c", &ch);

//     if (ch >= '0' && ch <= '9')
//     {
//         printf("It's a digit!");
//     }
//     else
//     {
//         printf("It's not a digit!");
//     }

//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {

//     int number;
//     int range;

//     printf("Enter a number : \n");
//     scanf("%d", &number);

//     if (number <= 1)
//     {
//         printf("Enter A Whole no.\n");
//     }

//     else if (number == 2 || number == 3)
//     {
//         printf("It's a prime number!\n");
//     }

//     else if (number % 2 == 0 || number % 3 == 0)
//     {
//         printf("It's not a prime number\n");
//     }

//     else
//     {
//         range = sqrt(number);
//         for (int i = 5; i <= range; i += 6){
//             if (number % i == 0 || number % (i + 2) == 0){
//                 printf("Not a prime number!");
//                 return 0;
//             }}

//         printf("It's a prime number!\n");
//     }
//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main(){

//     int number;
//     int factorial=1;

//     printf("Enter The number to Know factorial : \n");
//     scanf("%d",&number);

//     for(int i = number; i>= 1; i-- ){
//         factorial *=i;
//     }
//     printf("factorial is : %d", factorial);

//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     int number;
//     int sum = 0;

//     printf("Enter The number to sum : \n");
//     scanf("%d", &number);
//     for(int i=0 ;i<=number ; i++){
//         sum +=i;
//     }
//     printf("Total Sum Is : %d", sum);

//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     int number;
//     int cube;

//     printf("Enter number to calculate cube : \n");
//     scanf("%d", &number);

//     cube = pow(number,3);
//     printf("Cube of the number is : %d",cube);
//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     int Principle;
//     float annual_rate;
//     int time;
//     int compounding_count;
//     float Amount;
//     float SI;
//     float CI;

//     printf("Enter principle :\n");
//     scanf("%d", &Principle);

//     printf("Enter annual rate :\n");
//     scanf("%f", &annual_rate);

//     printf("Enter time(In year) :\n");
//     scanf("%d", &time);

//     printf("Enter Copmpounding count per year : \n");
//     scanf("%d", &compounding_count);

//     SI =( Principle*annual_rate*time)/100;
//     printf("Your simple Intrest is : %.2f",SI);

//     Amount = Principle*pow((1.0 +annual_rate/(100*compounding_count)) ,(compounding_count*time));
//     CI =Amount -Principle;
//     printf("Your Compound Intrest is : %.2f",CI);
//     return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main()
// {
//     int update;

//     for (int i = 0; i < 11; i++)
//     {
//         printf("Hello World \n");
//     }

//     int num = 0;
//     while (num < 5)
//     {
//         printf("hello world2 \n");
//         num += 1;
//     }

//     do
//     {
//         printf("Loop hasn't run yet \n");
//         num += 1;
//     } while (num < 10);

//     return 0;
// }

// #include <stdio.h>

// int main()
// {

//     FILE *e;

// e = fopen("new.txt" , "a");
// fprintf(e , "Hello world once\n");
// fprintf(e , "Hello world twice\n");
// fclose(e);

//     FILE *f;

//     f = fopen("new.txt", "r");
//     char line[100];

//     while (fgets(line, sizeof(line), f) != NULL)
//     {
//         printf("%s", line);
//     }

//     fclose(f);

//     return 0;
// }

// #include <stdio.h>
// #include <stdio.h>

// int main()
// {

//     int n;
//     int output[n];

//     printf("Enter the number til you want the series : \n");
//     scanf("%d", &n);

//     for (int i = 2; i <= n; i++)
//     {
//         output = (n - 1) + (n - 2);
//         printf("%d ", output);
//     }

//     return 0;
// }

// #include <stdio.h>

// int main() {
//     int n, a = 0, b = 1, next;

//     printf("Enter number of terms: ");
//     scanf("%d", &n);

//     for (int i = 1; i <= n; i++) {
//         printf("%d ", a);

//         next = a + b;
//         a = b;
//         b = next;
//     }

//     return 0;
// }


// #include <stdio.h>

// void swap(int *a, int *b) {
//     int temp = *a;
//     *a = *b;
//     *b = temp;
// }

// int main() {
//     int num1 = 10, num2 = 20;
    
//     printf("Before Swap: num1 = %d, num2 = %d\n", num1, num2);
    
//     // Addresses pass kiye
//     swap(&num1, &num2);
    
//     printf("After Swap: num1 = %d, num2 = %d\n", num1, num2);
//     return 0;
// }


// #include <stdio.h>

// int main() {
//     int n, isPrime = 1;
//     printf("Enter a number: ");
//     scanf("%d", &n);

//     if (n <= 1) {
//         isPrime = 0;
//     } else {
//         for (int i = 2; i <= n / 2; i++) {
//             if (n % i == 0) {
//                 isPrime = 0;
//                 break;
//             }
//         }
//     }

//     if (isPrime == 1)
//         printf("%d is a Prime Number.\n", n);
//     else
//         printf("%d is not a Prime Number.\n", n);

//     return 0;
// }


#include <stdio.h>
#include <stdlib.h>

// Node structure for Adjacency List
struct Node {
    int vertex;
    struct Node* next;
};

// Function to create a new list node
struct Node* createNode(int v) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->vertex = v;
    newNode->next = NULL;
    return newNode;
}

int main() {
    int V, E, u, v;

    printf("Enter number of vertices: ");
    scanf("%d", &V);

    printf("Enter number of edges: ");
    scanf("%d", &E);

    // 1. Initialize Adjacency Matrix
    int matrix[V][V];
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            matrix[i][j] = 0;
        }
    }

    // 2. Initialize Adjacency List
    struct Node* list[V];
    for (int i = 0; i < V; i++) {
        list[i] = NULL;
    }

    // Input edges
    for (int i = 0; i < E; i++) {
        printf("Enter edge %d (u v): ", i + 1);
        scanf("%d %d", &u, &v);

        // Update Matrix (Undirected Graph)
        matrix[u][v] = 1;
        matrix[v][u] = 1;

        // Update List (u -> v)
        struct Node* newNode = createNode(v);
        newNode->next = list[u];
        list[u] = newNode;

        // Update List (v -> u)
        newNode = createNode(u);
        newNode->next = list[v];
        list[v] = newNode;
    }

    // Print Adjacency Matrix
    printf("\n--- Adjacency Matrix ---\n");
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    // Print Adjacency List
    printf("\n--- Adjacency List ---\n");
    for (int i = 0; i < V; i++) {
        printf("Vertex %d: ", i);
        struct Node* temp = list[i];
        while (temp != NULL) {
            printf("%d -> ", temp->vertex);
            temp = temp->next;
        }
        printf("NULL\n");
    }

    return 0;
}