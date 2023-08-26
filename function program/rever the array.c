#include<stdio.h>
int* reverse( int n[], int l,int b[])
{
    int i,k=0;
    for(i=l-1;i>=0;i--)
    {
        b[k]=n[i];
        k++;
    }

    return b;
}
int main()
{
    int i,n;
    printf("enter the size of array : ");
    scanf("%d",&n);
    int a[n],b[n];
    for(i=0;i<n;i++)
    {
       scanf("%d",&a[i]);
    }
    reverse(a,n,b);
    for(i=0;i<n;i++)
    {
        printf("%d",b[i]);
    }
}