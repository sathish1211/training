#include<stdio.h>
int fact(int n)
{
     int fact=1;
     for(int i=1;i<=n;i++)
     {
        fact=fact*i;
     }
     return fact;
}
int main()
{
  int y;
  printf("enter the number ");
  scanf("%d",&y);
  printf("%d", fact(y));
}