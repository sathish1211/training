#include<stdio.h>
int main()
{
int a=0,b=1,n,c,i;
printf("Enter the number:");
scanf("%d",&n);
for(i=0;i<n;i++)
{
    printf("%d ",a);
    c=a+b;
    a=b;
    b=c;
}

    return 0;
}