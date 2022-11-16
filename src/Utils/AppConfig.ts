// General configuration...
class AppConfig {
    public productsUrl = "";
    public productImagesUrl = "";
    public employeesUrl = "";
    public employeeImagesUrl = "";
}

//Dev configuration...
class DevConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/";
    public productImagesUrl = "http://localhost:3030/api/products/images/";
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeeImagesUrl = "http://localhost:3030/api/employees/images/";
}

//Prod configuration...
class ProdConfig extends AppConfig {
    public productsUrl = "http://www.northwind/api/products/";
    public productImagesUrl = "http://www.northwind/api/products/images/";
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeeImagesUrl = "http://localhost:3030/api/employees/images/";


}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;