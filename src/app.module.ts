import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [

    // MODULO DEL CHAT //
    ChatModule,

    // PARA MOSTRAR EL CHAT QUE ESTA EN LA CARPETA PUBLIC EN EL NAVEGADOR //
    // ESTE VA A SER EL CLIENTE // 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    ConfigModule.forRoot()
    
  ],

})
export class AppModule {}
