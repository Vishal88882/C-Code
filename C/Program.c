#include <stdio.h>
#include <string.h>

struct user
{
    char username[20];
    char password[20];
    char email[50];
};
int main()
{

    char cmd[20], username_[20], password_[20], email_[50];
    int count = 0;
    struct user Programs[50];

    printf("Choose your command wisely: signup/login\n");
    printf("Enter command : ");
    scanf("%s", &cmd);

    for (int j = 0; j < count + 1; j++)
    {
        printf("Name: %s\n", Programs[j].username);
    }

    if (strcmp(cmd, "signup") == 0)
    {
        printf("Create username : ");
        scanf("%s", &username_);

        printf("Create password : ");
        scanf("%s", &password_);

        printf("Enter email : ");
        scanf("%s", &email_);

        if (strcmp(username_, Programs[count].username) == 0 && email_, Programs[count].email == 0)
        {
            printf("User Already Exist");
        }
        else
        {
            strcpy(username_, Programs[count].username);
            strcpy(password_, Programs[count].password);
            strcpy(email_, Programs[count].email);
            printf("Signup successfull!");
        }
        count += 1;
    }
    else if (strcmp(cmd, "login") == 0)
    {
        printf("Enter username : ");
        scanf("%s", &username_);
        printf("Enter password : ");
        scanf("%s", &password_);
        printf("Enter email : ");
        scanf("%s", &email_);

        if (strcmp(username_, Programs[count].username) == 0 &&
            strcmp(password_, Programs[count].password) == 0 &&
            strcmp(email_, Programs[count].email) == 0)
        {
            printf("Login successfull!");
        }
        else
        {
            printf("Please signup first");
        }
    }
    else
    {
        printf("Invalid Command!");
    }

    return 0;
}
