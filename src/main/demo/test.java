package automet.test;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class screenshot1 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://letcode.in/alert");
		WebElement section=driver.findElement(By.xpath("/html/body/app-root/app-alert/app-pageheader/section/div"));
		File our=section.getScreenshotAs(OutputType.FILE);
		File dest=new File("C:\\Users\\Dhanraj\\eclipse-workspace\\test\\screen\\raj.png");
		FileUtils.copyFile(our, dest);

	}

}

