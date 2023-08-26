#include<stdio.h>
int palidrome(char a[],int len)
{
    int k=len-1,i,cont=0;
    for(i=0;i<=len/2;i++)
    {
        if(a[i]!=a[k])
        {
         cont=1;
         break;
        }
        k--;
    }
    if(cont==0)
      printf("given string is palidrome");
    else
      printf("the given string is not palidrome"); 
}
int main()
{
    int i=0;
    char a[20];
    printf("enter the string ");
    scanf("%s",a);
    for( i=0;a[i];i++);
    palidrome(a,i);
}