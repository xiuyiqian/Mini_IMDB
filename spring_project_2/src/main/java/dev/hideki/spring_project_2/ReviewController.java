package dev.hideki.spring_project_2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {
        return new ResponseEntity<List<Review>>(
                reviewService.findReviews(),HttpStatus.OK
        );
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(
                reviewService.createReview(payload.get("reviewBody"),payload.get("imdbId")),
                HttpStatus.OK);
    }

}
