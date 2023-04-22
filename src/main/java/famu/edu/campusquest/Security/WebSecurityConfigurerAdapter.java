package famu.edu.campusquest.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;

public abstract class WebSecurityConfigurerAdapter {
    protected abstract void configure(AuthenticationManagerBuilder auth) throws Exception;

    protected abstract void configure(HttpSecurity http) throws Exception;

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return null;
    }

    @Bean
    public abstract UserDetailsService userDetailsService();
}