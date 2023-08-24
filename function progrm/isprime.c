#include<stdio.h>
char* prime(int n)
{
    int i,count=0;
    for(i=2;i<n/2;i++)
    {
        if(n%i ==0)
        {
            count=1;
            break;
        }
    }
    if(count==0)
       printf("given number is prime");
    else
       printf( "given number is not prime");
}
int main()
{
    int n;
    printf("enter the number");
    scanf("%d",&n);
    prime(n);
}