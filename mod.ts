import { 
  Controller,
  Content,
  Get,
  Area,
  App,
} from 'https://deno.land/x/alosaur/src/mod.ts';

@Controller('/home')
export class HomeController {
  @Get('/')
  index() {
    return Content('Hello world');
  }
}

@Area({
  controllers: [HomeController]
})
export class HomeArea {
}

const app = new App({
  areas: [HomeArea]
});

app.listen();
