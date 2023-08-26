#include<stdio.h>
float area(int n)
{
    return 3.14*n*n;
}
int main()
{
    int a;
    printf("enter the radius");
    scanf("%d",&a);
    printf("%f",area(a));

}