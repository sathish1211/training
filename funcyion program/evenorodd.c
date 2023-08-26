#include<stdio.h>
#include<string.h>
char* iseven( int a)
{
   if(a%2 ==0)
     return "even";
   return "odd";
}
int main()
{
    int n;
    printf("enter the number ");
    scanf("%d",&n);
    printf("%s",iseven(n));
}
