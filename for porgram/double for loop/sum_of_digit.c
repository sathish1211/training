#include <stdio.h>

int main()
{
    int n,sum=0;

    printf("enther the number :");
    scanf("%d",&n);
    while (n>0)
    {
        sum+=(n%10);
        n/=10;
    }
    printf("sum of the digits : %d.",sum);
    


    return 0;
}