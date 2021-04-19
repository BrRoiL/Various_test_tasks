using System;
using DeliveryToExternaCustomers_Lib;

namespace DeliveryToExternaCustomers_Console
{
    class DeliveryToExternaCustomersConsole
    {
        static void Main(string[] args)
        {
            Console.WriteLine("");
            Console.WriteLine(DeliveryToExternaCustomersLib.S_Circle(3));
            Console.WriteLine(DeliveryToExternaCustomersLib.S_Triangle(4, 5, 3));

            Console.ReadKey();
        }
    }
}
