package productcataloguespringproject.controller;
import org.springframework.web.bind.annotation.*;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import productcataloguespringproject.entity.Product;
import productcataloguespringproject.service.ProductService;
import java.util.List;

@CrossOrigin(
        origins = {
                "http://localhost:3000",
                "*",
        },
        methods = {
                RequestMethod.OPTIONS,
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.POST
        })

@RestController
@AllArgsConstructor
@RequestMapping("product")
public class ProductController {
    private ProductService productService;
    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedTodoList = productService.createProduct(product);
        return new ResponseEntity<>(savedTodoList, HttpStatus.CREATED);
    }

    @GetMapping("/lists")
    public ResponseEntity<List<Product>> getProductList() {
        List<Product> list = productService.getProductList();
        return ResponseEntity.ok().body(list);
    }
}