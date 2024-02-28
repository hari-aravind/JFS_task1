package productcataloguespringproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import productcataloguespringproject.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {

}