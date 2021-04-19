using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DeliveryToExternaCustomers_Test
{
    [TestClass]
    public class DeliveryToExternaCustomersTest
    {
        [TestMethod]
        public void Right_triangle()
        {
            //arrange
            int a = 4;
            int b = 5;
            int c = 3;

            //act
            double actual = DeliveryToExternaCustomers_Lib.DeliveryToExternaCustomersLib.S_Triangle(a, b, c);

            //assett
            Assert.AreEqual(6, actual);
        }
    }
}