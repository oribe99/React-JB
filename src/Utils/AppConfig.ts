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
    public registerUrl = "http://localhost:3030/api/auth/register/";
    public loginUrl = "http://localhost:3030/api/auth/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
    public categoriesImagesUrl = "http://localhost:3030/api/categories/images/";
}

//Prod configuration...
class ProdConfig extends AppConfig {
    public productsUrl = "http://www.northwind/api/products/";
    public productImagesUrl = "http://www.northwind/api/products/images/";
    public employeesUrl = "http://northwind/api/employees/";
    public employeeImagesUrl = "http://northwind/api/employees/images/";
    public registerUrl = "http://northwind/api/auth/register/";
    public loginUrl = "http://northwind/api/auth/login/";
    public categoriesUrl = "http://northwind/api/categories/";
    public categoriesImagesUrl = "http://northwind/api/categories/images/";

}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;