#include<stdio.h>
int max(int a[],int len)
{
    int max=0;
    for(int i=0;i<len;i++)
    {
        if(max<a[i])
          max=a[i];
    }
    return max;
}
int main()
{
    int n;
    printf("enter the number ");
    scanf("%d",&n);
    int a[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("%d",max(a,n));
}