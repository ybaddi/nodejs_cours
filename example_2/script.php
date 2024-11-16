<?php
phpinfo();
?>


New-AzureADUser -UserPrincipalName "baddi@wingstechnologies.ma" `
                -DisplayName "baddi youssef" `
                -PasswordProfile (New-Object -TypeName Microsoft.Open.AzureAD.Model.PasswordProfile -Property @{Password = "MotDePasseTemporaire123"; ForceChangePasswordNextLogin = $true}) `
                -MailNickname "nouvelutilisateur" `
                -AccountEnabled $true