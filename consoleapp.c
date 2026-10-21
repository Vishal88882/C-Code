#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct user
{
    char username[30];
    char email[30];
    char password[30];
};

int main()
{
    char cmd[10], username_[30], email_[30], password_[30];
    int counter = 0;

    while (1)
    {
        printf("Enter command (signup or login) : ");
        scanf("%s", &cmd);

        struct user users[100];

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