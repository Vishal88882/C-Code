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
#include <string.h>
#include <stdlib.h>

struct user
{
    char username[30];
    char email[30];
    char password[30];
    char tasks[500];
};

int main()
{
    char cmd[10], username_[30], email_[30], password_[30], task_[500];
    int counter = 0;
    
    struct user users[100];
    while (1)
    {
        printf("Enter command (signup or login) : ");
        scanf("%s", &cmd);

        if (strcmp(cmd, "signup") == 0)
        {
            
            printf("Create your username : ");
            scanf("%s", username_);

            printf("Enter you email : ");
            scanf("%s", email_);

            printf("Create your password : ");
            scanf("%s", password_);

            for (int j = 0; j <= counter; j++)
            {
                if (strcmp(users[j].username, username_) == 0 && strcmp(users[j].email, email_) == 0)
                {
                    printf("User Already Exists!\n");

                    return 0;
                }
            }

            strcpy(users[counter].username, username_);
            strcpy(users[counter].email, email_);
            strcpy(users[counter].password, password_);
            counter++;

            printf("Signup successful\n");
            printf("To check complete list of users enter \"data\" : ");
            scanf("%s", cmd);

            if (strcmp(cmd, "data") == 0)
            {
                for (int i = 0; i < counter; i++)
                {
                    printf("User %d:\n", i + 1);
                    printf("Username: %s\n", users[i].username);
                    printf("Email: %s\n", users[i].email);
                    printf("Password: %s\n", users[i].password);
                    printf("-----------------------------------------\n");
                }
            }

            else
            {
                printf("Invalid Command!\n");
            }
        }
        else if (strcmp(cmd, "login") == 0)
        {
            printf("Enter your username : ");
            scanf("%s", username_);

            printf("Enter you email : ");
            scanf("%s", email_);

            printf("Enter your password : ");
            scanf("%s", password_);

            for (int i = 0; i < counter; i++)
            {
                if (strcmp(users[i].username, username_) == 0 && strcmp(users[i].email, email_) == 0)
                {
                    printf("Login Successfull!\n");
                    printf("Do you wanna add tasks \"yes/no\": ");
                    scanf("%s", cmd);

                    for (int i = 0; i <1; i++)
                    {
                        if (strcmp(cmd, "yes") == 0)
                        {

                            printf("Enter your task : ");
                            scanf("%s", task_);
                            strcat(users[i].tasks, "\n");
                            strcat(users[i].tasks,task_);
                            strcat(users[i].tasks, ",\n");
                            printf("Task added!\n");
                        }
                    }
                    printf("To check complete list of user's data enter \"data\" : ");
                    scanf("%s", cmd);

                    if (strcmp(cmd, "data") == 0)
                    {
                        for (int i = 0; i < counter; i++)
                        {
                            printf("User %d:\n", i + 1);
                            printf("Username: %s\n", users[i].username);
                            printf("Email: %s\n", users[i].email);
                            printf("Password: %s\n", users[i].password);
                            printf("Tasks: %s\n", users[i].tasks);
                            printf("-----------------------------------------\n");
                        }
                    }

                    else
                    {
                        printf("Invalid Command!\n");
                    }
                }
                else
                {
                    printf("Invalid Credentials!\n");
                }
            }
        }
        else
        {
            printf("Invalid Command!\n");
        }
    }
    return 0;
}