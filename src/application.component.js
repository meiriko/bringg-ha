class AppController { 
}

const appComponent = {
  template: `
        <div class="container-fluid">
          <ui-view class="list"></ui-view>
          <ui-view class="content" name="content"></ui-view>
        </div>
    `,
  controller: AppController
};

export default appComponent;
