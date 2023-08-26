#include<stdio.h>
int sum(int a, int b)
{
    return a+b;
}
int main()
{
    int m,n,r;
    printf("enter the two integer ");
    scanf("%d %d",&m,&n);
    r=sum(m,n);
    printf("%d", r);
}
