package singleton;

import java.io.IOException;
import java.util.Properties;
import java.io.InputStream;

public class ConfigManager {

    private static ConfigManager instance;

    private Properties properties;

    private ConfigManager() {
        this.properties = new Properties();
        try (InputStream input = getClass().getClassLoader().getResourceAsStream("Config.properties")) {
            if (input == null) {
                System.out.println("Arquivo de configurações não foi encontrado!");
                return;
            }
            properties.load(input);
        } catch (IOException exception) {
            exception.printStackTrace();
        }
    }

    public static ConfigManager getInstance() {
        if (instance == null) {
            instance = new ConfigManager();
        }
        return instance;
    }

    public String getProperties(String key) {
        return properties.getProperty(key);
    }
}
