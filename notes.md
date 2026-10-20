#include<stdio.h>
int main()
{
    int i, sum;
    int s[20];
    float avg;
    sum=0;
    printf("Enter marks of 20 students:\n");
    for(i=0;i<20;i++)
    {
        printf("%d:",i+1);
        scanf("%d",&s[i]);
    }
    i=0;
    while(i<20)
    {
        sum=sum+s[i];
        i++;
    }
    avg = sum / 20.0;
    printf("Sum: %d\n", sum);
    printf("Average: %.2f\n", avg);
    return 0;
}




#include<stdio.h>
void main() {
    int n,i;
    int prod=1;
    printf("Enter a number n11:");
    scanf("%d", & n );
    for(i=1;i<=n;i++)
    { 
        prod=prod*i;
       
    }
    printf("Product of first %d natural number is %d", n, prod);
}


To Run A C New C File  
.>> gcc file.c -o file(Write -o file to give a cutom name for .exe file)
.>> ./file.exe





        // if(strcmp(users.username, username_) == 1 || strcmp(users.email,email_) == 1){
        //     strcpy(users.username, username_);
        //     strcpy(users.email, email_);
        //     strcpy(users.password, password_);
        // }else{
        //     printf("User already exist");
        // }