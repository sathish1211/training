#include<stdio.h>
float CTF(float c)
{
    return (((9*c)/5)+32);
}
int main()
{
    float m;
    printf("enter the value in celsius ");
    scanf("%f",&m);
    printf("%f",CTF(m));
}