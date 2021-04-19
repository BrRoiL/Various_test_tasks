using System;

namespace DeliveryToExternaCustomers_Lib
{
    public class DeliveryToExternaCustomersLib
    {
        static public double S_Circle(int r)
        {
            return Math.PI * Math.Pow(r, 2);
        }

        static public double S_Triangle(int a, int b, int c)
        {
            double p = (a + b + c) / 2;
            return Math.Sqrt((p * (p - a)) * (p - b)  * (p - c));
        }
    }
}
