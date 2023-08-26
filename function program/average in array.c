#include<stdio.h>
int average(int a[],int n)
{
    int sum=0;
    float avg;
    for(int i=0;i<n;i++)
    {
        sum=sum+a[i];
    }
    avg=sum/n;
    return avg;
}
int main()
{
    int n,i;
    printf("enter the size of array");
    scanf("%d",&n);
    int a[n];
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("%d",average(a,n));
}