#include <stdio.h>


int main()
{
	int n ;

    printf("enter the decimal values :");

    scanf("%d",&n);

    int b[32];

	int i = 0;
    
	while (n > 0)
    {
		b[i] = n % 2;
		n = n / 2;
		i++;
	}
	for (int j = i - 1; j >= 0; j--)
		printf("%d", b[j]);

	
	return 0;
}
